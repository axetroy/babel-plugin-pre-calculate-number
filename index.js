var babel = require('babel-core');
var t = require('babel-types');
const Big = require('big.js');

function calcExpression(left, operator, right) {
  let result;
  switch (operator) {
    case "+":
      result = +new Big(left).plus(right);
      break
    case "-":
      result = +new Big(left).minus(right);
      break;
    case "*":
      result = +new Big(left).times(right);
      break;
    case "/":
      result = +new Big(left).div(right);
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
    if (t.isMemberExpression(node.left) && t.isNumericLiteral(node.right) || t.isNumericLiteral(node.left) && t.isMemberExpression(node.right)) {
      const member = t.isMemberExpression(node.left) ? node.left : node.right;
      const number = t.isNumericLiteral(node.left) ? node.left : node.right;

      if (member.object && member.object.name === "Math" && member.property.name === "PI") {
        result = calcExpression(node.left === member ? Math.PI : number.value, node.operator, node.right === number ? number.value : Math.PI)
      }
    }
    else if (t.isNumericLiteral(node.left) && t.isNumericLiteral(node.right)) {
      result = calcExpression(node.left.value, node.operator, node.right.value)
    }

    // if got result, should update parent node
    if (result !== undefined) {
      path.replaceWith(t.numericLiteral(result));

      let parentPath = path.parentPath;

      // traverse parent node
      parentPath && visitor.BinaryExpression.call(this, parentPath);
    }
  }
};

module.exports = function (babel) {
  return {
    visitor
  };
}