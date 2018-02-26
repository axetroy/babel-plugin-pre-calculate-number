import test from "ava";
import { transform } from "babel-core";
import path from "path";
import preCalculateNumberPlugin from '../index';

test("div-1", t => {
  const { code } = transform(`const result = 1 / 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 0.5;`);
});

test("div-2", t => {
  const { code } = transform(`const result = 100 / 5 / 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 10;`);
});
