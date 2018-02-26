import test from "ava";
import { transform } from "babel-core";
import path from "path";
import preCalculateNumberPlugin from '../index';

test("plus", t => {
  const { code } = transform(`const result = Math.PI * 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 6.283185307179586;`);
});
