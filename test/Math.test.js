import test from "ava";
import { transform } from "babel-core";
import path from "path";
import preCalculateNumberPlugin from "../index";

test("PI", t => {
  const { code } = transform(`const result = Math.PI * 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 6.283185307179586;`);
});

test("[PI]", t => {
  const { code } = transform(`const result = Math["PI"] * 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 6.283185307179586;`);
});

test("E", t => {
  const { code } = transform(`const result = Math.E * 2;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 5.43656365691809;`);
});

test("pow", t => {
  const { code } = transform(`const result = Math.pow(2, 2);`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 4;`);
});

test("[pow]", t => {
  const { code } = transform(`const result = Math["pow"](2, 2);`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 4;`);
});

test("min", t => {
  const { code } = transform(`const result = Math.min(4, 5, 11, 22);`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 4;`);
});

test("max", t => {
  const { code } = transform(`const result = Math.max(4, 5, 11, 22);`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 22;`);
});
