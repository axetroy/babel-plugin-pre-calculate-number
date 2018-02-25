import test from 'ava';
import { transformFile } from 'babel-core';
import util from 'util';
import path from 'path';

const root = process.cwd();

test("plus", async (t) => {
  const { code } = await util.promisify(transformFile)(path.join(root, 'test', 'mul.js'), {
    plugins: [
      require(path.join(root, 'index.js'))
    ]
  });
  t.deepEqual(code, `const result = 2;`);
});

test("multiple-plus", async (t) => {
  const { code } = await util.promisify(transformFile)(path.join(root, 'test', 'mul-multiple.js'), {
    plugins: [
      require(path.join(root, 'index.js'))
    ]
  });
  t.deepEqual(code, `const result = 120;`);
})