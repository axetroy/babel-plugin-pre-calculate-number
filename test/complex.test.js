import test from 'ava';
import { transformFile } from 'babel-core';
import util from 'util';
import path from 'path';

const root = process.cwd();

test("multiple-plus", async (t) => {
  const { code } = await util.promisify(transformFile)(path.join(root, 'test', 'complex-1.js'), {
    plugins: [
      require(path.join(root, 'index.js'))
    ]
  });
  t.deepEqual(code, `const result = 60;`);
});

test("multiple-plus", async (t) => {
  const { code } = await util.promisify(transformFile)(path.join(root, 'test', 'complex-2.js'), {
    plugins: [
      require(path.join(root, 'index.js'))
    ]
  });
  t.deepEqual(code, `const result = 100;`);
});

test("multiple-plus", async (t) => {
  const { code } = await util.promisify(transformFile)(path.join(root, 'test', 'complex-3.js'), {
    plugins: [
      require(path.join(root, 'index.js'))
    ]
  });
  t.deepEqual(code, `const result = 9;`);
})

test("multiple-plus", async (t) => {
  const { code } = await util.promisify(transformFile)(path.join(root, 'test', 'complex-4.js'), {
    plugins: [
      require(path.join(root, 'index.js'))
    ]
  });
  t.deepEqual(code, `const result = 28.274333882308138;`);
})