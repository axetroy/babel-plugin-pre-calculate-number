import test from "ava";
import { transform } from "babel-core";
import path from "path";
import preCalculateNumberPlugin from "../index";

test("mul-1", t => {
  const { code } = transform(`const result = 1 * 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 2;`);
});

test("mul-2", t => {
  const { code } = transform(`const result = 1 * 2 * 3 * 4 * 5;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 120;`);
});
