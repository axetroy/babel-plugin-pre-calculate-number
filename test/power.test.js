import test from "ava";
import { transform } from "babel-core";
import path from "path";
import preCalculateNumberPlugin from '../index';

test("plus", t => {
  const { code } = transform(`const result = 2 ** 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 4;`);
});

test("multiple-plus", t => {
  const { code } = transform(`const result = 2 ** 2 ** 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 16;`);
});
