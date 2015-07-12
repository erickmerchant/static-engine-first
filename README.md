# static-engine-first

[![Dependency Status](https://david-dm.org/erickmerchant/static-engine-first.svg?style=flat-square)](https://david-dm.org/erickmerchant/static-engine-first) [![devDependency Status](https://david-dm.org/erickmerchant/static-engine-first/dev-status.svg?style=flat-square)](https://david-dm.org/erickmerchant/static-engine-first#info=devDependencies) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

This is a plugin for [static-engine](https://github.com/erickmerchant/static-engine). It simply reduces the collection to just the first object.

```javascript
var engine = require('static-engine')
var first = require('static-engine-first')
var pluginA = require('plugin-a')

engine([
  pluginA,
  first
])
```
