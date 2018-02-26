import test from "ava";
import { transform } from "babel-core";
import path from "path";

const root = process.cwd();

test("complex-1", t => {
  const { code } = transform(`const result = 100 + 10 - 50;`, {
    plugins: [require(path.join(root, "index.js"))]
  });
  t.deepEqual(code, `const result = 60;`);
});

test("complex-2", t => {
  const { code } = transform(`const result = (100 / 2) + 50;`, {
    plugins: [require(path.join(root, "index.js"))]
  });
  t.deepEqual(code, `const result = 100;`);
});

test("complex-3", t => {
  const { code } = transform(
    `const result = (((100 / 2) + 50 * 2) / 50) ** 2;`,
    {
      plugins: [require(path.join(root, "index.js"))]
    }
  );
  t.deepEqual(code, `const result = 9;`);
});

test("complex-4", t => {
  const { code } = transform(
    `const result = (((100 / 2) + 50 * 2) / 50) ** 2 * Math.PI;`,
    {
      plugins: [require(path.join(root, "index.js"))]
    }
  );
  t.deepEqual(code, `const result = 28.274333882308138;`);
});
