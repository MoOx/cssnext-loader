var cssnext = require("cssnext")
var assign = require("object-assign")
var loaderUtils = require("loader-utils")

function defaultOptions(context, map){
  var options = {}
  options.from = loaderUtils.getRemainingRequest(context)
  options.to = loaderUtils.getRemainingRequest(context)
  if (context.sourceMap) {
    options.map = {
      inline: false,
      annotation: false,
      prev: map
    }
  }
  options.compress = context.minimize
  return options
}

function cssnextLoader(contents, map){
  this.cacheable()
  var options = assign({}, defaultOptions(this, map), this.options.cssnext)
  options.features = assign({}, this.options.cssnext ? this.options.cssnext.features : null)
  options.import = assign({}, options.import || null)
  options.import.onImport = function(files){
    files.forEach(this.addDependency)
  }.bind(this)
  try {
    var result = cssnext(contents, options)
    if (result.css) {
      this.callback(null, result.css, result.map)
    } else {
      return result
    }
  } catch(err) {
    this.emitError(err)
  }
}

module.exports = cssnextLoader
