import test from "ava";
import { transform } from "babel-core";
import path from "path";
import preCalculateNumberPlugin from '../index';

test(">>", t => {
  const { code } = transform(`const result = 5 >> 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 1;`);
});

test("<<", t => {
  const { code } = transform(`const result = 5 << 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 20;`);
});

test("|", t => {
  const { code } = transform(`const result = 5 | 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 7;`);
});

test("&", t => {
  const { code } = transform(`const result = 5 & 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 0;`);
});

test("^", t => {
  const { code } = transform(`const result = 5 ^ 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 7;`);
});

test(">>>", t => {
  const { code } = transform(`const result = 5 >>> 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 1;`);
});
