var babel = require("babel-core");
var t = require("babel-types");
const Big = require("big.js");

function calcExpression(left, operator, right) {
  let result;
  switch (operator) {
    case "+":
      result = +new Big(left).plus(right);
      break;
    case "-":
      result = +new Big(left).minus(right);
      break;
    case "*":
      result = +new Big(left).times(right);
      break;
    case "/":
      result = +new Big(left).div(right);
      break;
    case "%":
      result = +new Big(left).mod(right);
      break;
    case ">>":
      result = left >> right;
      break;
    case ">>>":
      result = left >>> right;
      break;
    case "<<":
      result = left << right;
      break;
    case "|":
      result = left | right;
      break;
    case "&":
      result = left & right;
      break;
    case "^":
      result = left ^ right;
      break;
    case "**":
      let i = right;
      while (--i) {
        result = result || left;
        result = +new Big(result).times(left);
      }
      break;
    default:
  }
  return result;
}

const visitor = {
  BinaryExpression(path) {
    const node = path.node;
    let result;
    // example: Math.PI * (2 ** 2);
    if (
      (t.isMemberExpression(node.left) && t.isNumericLiteral(node.right)) ||
      (t.isNumericLiteral(node.left) && t.isMemberExpression(node.right))
    ) {
      const member = t.isMemberExpression(node.left) ? node.left : node.right;
      const number = t.isNumericLiteral(node.left) ? node.left : node.right;

      if (member.object && member.object.name === "Math") {
        let method;

        if (t.isIdentifier(member.property)) {
          method = member.property.name;
        } else if (t.isStringLiteral(member.property)) {
          method = member.property.value;
        }

        switch (method) {
          case "E":
          case "LN10":
          case "LOG2E":
          case "LOG10E":
          case "SQRT1_2":
          case "SQRT2":
          case "PI":
            result = calcExpression(
              node.left === member ? Math[method] : number.value,
              node.operator,
              node.right === number ? number.value : Math[method]
            );
            break;
          default:
        }
      }
    } else if (
      t.isNumericLiteral(node.left) &&
      t.isNumericLiteral(node.right)
    ) {
      result = calcExpression(node.left.value, node.operator, node.right.value);
    }

    // if got result, should update parent node
    if (result !== undefined) {
      path.replaceWith(t.numericLiteral(result));

      let parentPath = path.parentPath;

      // traverse parent node
      parentPath &&
        t.isBinaryExpression(parentPath.node) &&
        visitor.BinaryExpression.call(this, parentPath);
    }
  },
  CallExpression(path) {
    const node = path.node;
    // only allow calc Math's method
    if (
      t.isMemberExpression(node.callee) &&
      t.isIdentifier(node.callee.object) &&
      node.callee.object.name === "Math"
    ) {
      let method;
      if (t.isIdentifier(node.callee.property)) {
        method = node.callee.property.name;
      } else if (t.isStringLiteral(node.callee.property)) {
        method = node.callee.property.value;
      }
      let result;

      // The argument of this callExpression
      const args = node.arguments;

      switch (method) {
        default:
          // If the all argument is numberic literal
          const isAllNumber = args.every(v => t.isNumericLiteral(v));
          if (isAllNumber) {
            result = Math[method].apply(Math, args.map(v => v.value));
          }
      }

      if (result !== undefined) {
        path.replaceWith(t.numericLiteral(result));
      }
    }
  }
};

module.exports = function(babel) {
  return {
    visitor
  };
};
