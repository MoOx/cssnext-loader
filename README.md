# DEPRECATED. Use postcss-loader instead.

---

# cssnext-loader [![Build Status](http://img.shields.io/travis/cssnext/cssnext-loader.svg)](https://travis-ci.org/cssnext/cssnext-loader)

> a webpack loader for cssnext

**Issues with the output should be reported on [cssnext issue tracker](https://github.com/cssnext/cssnext/issues).**

## Install

```console
$ npm install cssnext-loader
```

## Usage

Add a cssnext section in your `webpack.config.js`

```javascript
module.exports = {
  entry: "path/to/entry",
  output: {
    path: "path/to/output/",
    filename: "bundle.js"
  },
  cssnext: {
    browsers: "last 2 versions",
  }
}
```

You can configure webpack so that it always parses CSS files like this :

```javascript
module: {
  loaders: [
    {
      test:   /\.css$/,
      loader: "style-loader!css-loader!cssnext-loader"
    }
  ]
}
```

Or, for a direct usage, in your JavaScript files :

```javascript
var css = require("style-loader!css-loader!cssnext-loader!../..!./file.css")
```

### Options

Options are directly passed to cssnext, so checkout [cssnext options](http://cssnext.io/usage/) directly.

_Note: some options are by default automatically specified._

- `from`
- `to`
- `sourcemap` (webpack `sourceMap`)
- `compress` (webpack `minimize`)
- `safe` - whether to compress in [safe mode](http://cssnano.co/options/#-options-safe-bool-)

---

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
