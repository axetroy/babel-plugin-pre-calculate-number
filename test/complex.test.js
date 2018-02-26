import test from "ava";
import { transform } from "babel-core";
import path from "path";
import preCalculateNumberPlugin from '../index';

test("complex-1", t => {
  const { code } = transform(`const result = 100 + 10 - 50;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 60;`);
});

test("complex-2", t => {
  const { code } = transform(`const result = (100 / 2) + 50;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const result = 100;`);
});

test("complex-3", t => {
  const { code } = transform(
    `const result = (((100 / 2) + 50 * 2) / 50) ** 2;`,
    {
      plugins: [preCalculateNumberPlugin]
    }
  );
  t.deepEqual(code, `const result = 9;`);
});

test("complex-4", t => {
  const { code } = transform(
    `const result = (((100 / 2) + 50 * 2) / 50) ** 2 * Math.PI;`,
    {
      plugins: [preCalculateNumberPlugin]
    }
  );
  t.deepEqual(code, `const result = 28.274333882308138;`);
});

test("complex-4", t => {
  const { code } = transform(`const day = 3600 * 1000 * 24;`, {
    plugins: [preCalculateNumberPlugin]
  });
  t.deepEqual(code, `const day = 86400000;`);
});
