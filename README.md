# Babel-plugin-pre-calculate-number

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/babel-plugin-pre-calculate-number.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/axetroy/babel-plugin-pre-calculate-number.svg?branch=master)](https://travis-ci.org/axetroy/babel-plugin-pre-calculate-number)
[![Coverage Status](https://coveralls.io/repos/github/axetroy/babel-plugin-pre-calculate-number/badge.svg?branch=master)](https://coveralls.io/github/axetroy/babel-plugin-pre-calculate-number?branch=master)
[![Dependency](https://david-dm.org/axetroy/babel-plugin-pre-calculate-number.svg)](https://david-dm.org/axetroy/babel-plugin-pre-calculate-number)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=8.9-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/babel-plugin-pre-calculate-number.svg)](https://badge.fury.io/js/babel-plugin-pre-calculate-number)
![Size](https://github-size-badge.herokuapp.com/axetroy/babel-plugin-pre-calculate-number.svg)

Before:

```javascript
const result = 1 + 2 + 3 + 4 + 5;
const area = Math.PI * 2 ** 2;
const oneDaySeconds = 60 * 60 * 24;
const minAge = Math.min(12, 18, 22);

setTimeout(function() {
  // do something
}, 1000 * 2);
```

After:

```javascript
const result = 15;
const area = 12.566370614359172;
const oneDaySeconds = 86400;
const minAge = 12;

setTimeout(function() {
  // do something
}, 2000);
```

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/axetroy/babel-plugin-pre-calculate-number/commits?author=axetroy) 🔌 [⚠️](https://github.com/axetroy/babel-plugin-pre-calculate-number/commits?author=axetroy) [🐛](https://github.com/axetroy/babel-plugin-pre-calculate-number/issues?q=author%3Aaxetroy) 🎨 |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/axetroy/babel-plugin-pre-calculate-number/blob/master/LICENSE)
