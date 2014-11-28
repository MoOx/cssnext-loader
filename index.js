var cssnext = require("cssnext")
var assign = require("object-assign")

function cssnextLoader(contents){
  this.cacheable()
  var options = assign({}, this.options.cssnext)
  options.features = assign({}, this.options.cssnext ? this.options.cssnext.features : null)
  options.features.import = assign({}, options.features.import || null)
  options.features.import.onImport = function(files){
    files.forEach(function(file){
      this.addDependency(file)
    }, this)
  }.bind(this)
  try {
    return cssnext(contents, options)
  } catch(err) {
    this.emitError(err)
  }
}

module.exports = cssnextLoader
