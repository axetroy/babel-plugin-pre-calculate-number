import test from 'ava';
import { transformFile } from 'babel-core';
import util from 'util';
import path from 'path';

const root = process.cwd();

test("plus", async (t) => {
  const { code } = await util.promisify(transformFile)(path.join(root, 'test', 'plus.js'), {
    plugins: [
      require(path.join(root, 'index.js'))
    ]
  });
  t.deepEqual(code, `const result = 3;`);
});

test("multiple-plus", async (t) => {
  const { code } = await util.promisify(transformFile)(path.join(root, 'test', 'plus-multiple.js'), {
    plugins: [
      require(path.join(root, 'index.js'))
    ]
  });
  t.deepEqual(code, `const result = 15;`);
});

test("multiple-plus", async (t) => {
  const { code } = await util.promisify(transformFile)(path.join(root, 'test', 'plus-float.js'), {
    plugins: [
      require(path.join(root, 'index.js'))
    ]
  });
  t.deepEqual(code, `const result = 0.3;`);
})