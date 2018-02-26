import test from "ava";
import { transform } from "babel-core";
import path from "path";
import preCalculateNumberPlugin from '../index';

test("mod-1", t => {
  const { code } = transform(`const result = 10 % 3;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 1;`);
});

test("mod-2", t => {
  const { code } = transform(`const result = 10 % 3 % 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 1;`);
});
