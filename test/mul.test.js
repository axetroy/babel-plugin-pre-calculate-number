import test from "ava";
import { transform } from "babel-core";
import path from "path";

const root = process.cwd();

test("mul-1", t => {
  const { code } = transform(`const result = 1 * 2;`, {
    plugins: [require(path.join(root, "index.js"))]
  });
  t.deepEqual(code, `const result = 2;`);
});

test("mul-2", t => {
  const { code } = transform(`const result = 1 * 2 * 3 * 4 * 5;`, {
    plugins: [require(path.join(root, "index.js"))]
  });
  t.deepEqual(code, `const result = 120;`);
});
