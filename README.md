# cssnext-loader

> a webpack loader for cssnext

## install

```sh
$ npm install cssnext-loader
```

## api

### cssnext

in your `webpack.config.js`

```javascript
module.exports = {
  entry: "path/to/entry",
  output: {
    path: "path/to/output/",
    filename: "bundle.js"
  },
  cssnext : {
    features : {
      import : {
        path : ["src/assets/stylesheets"]
      }
    }
  }
}
```

in your js file :

```javascript
var css = require("style-loader!css-loader!../..!./file.css")
```

you can also configure webpack so that it always parses CSS files like this :

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

## [license](LICENSE)
