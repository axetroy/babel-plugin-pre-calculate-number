import test from "ava";
import { transform } from "babel-core";
import path from "path";

const root = process.cwd();

test("div-1", t => {
  const { code } = transform(`const result = 1 / 2;`, {
    plugins: [require(path.join(root, "index.js"))]
  });
  t.deepEqual(code, `const result = 0.5;`);
});

test("div-2", t => {
  const { code } = transform(`const result = 100 / 5 / 2;`, {
    plugins: [require(path.join(root, "index.js"))]
  });
  t.deepEqual(code, `const result = 10;`);
});
