[![semantic-release: commitizen](https://img.shields.io/badge/semantic--release-commitizen-brightgreen?logo=semantic-release)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Install
```
$ npm install --save @goldyjs/shared
```

## Use

### Base
```js
import Base from "@goldyjs/shared/Base"

class FooBar extends Base {
  a = 1
  b = [5]
}

const foo = new Foo()

foo.variables // { a: 1, b: [5] }
foo.prettyClassName // Foo bar
foo.logPrefix // [FooBar]
```