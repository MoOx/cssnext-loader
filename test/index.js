var webpack = require("webpack")
var path = require("path")
var tape = require("tape")
var fs = require("fs")

tape("cssnext-loader", function(test){
  webpack({
    entry: "./test/fixtures/index.js",
    output: {
      path: "./test/output/",
      filename: "bundle.js"
    },
    cssnext : {
      features : {
        import : {
          path : ["test/fixtures/"]
        }
      }
    }
  }, function(err, stat){
    var file = ""
    fs.createReadStream("test/output/bundle.js")
      .on("data", function(chunk){
        file += chunk
      })
      .on("end", function(){
        test.ok(/color\s*:\s*red/.test(file), "css transformed")
        test.notOk(/# sourceMappingURL=.*\s*$/.test(file), "source map annotation not added")
        test.end()
      })
  })
})

tape("cssnext-loader source maps", function(test){
  webpack({
    entry: "./test/fixtures/index.js",
    output: {
      path: "./test/output/",
      filename: "bundle.js"
    },
    debug: true,
    devtool: 'source-map',
    cssnext : {
      features : {
        import : {
          path : ["test/fixtures/"]
        }
      }
    }
  }, function(err, stat){
    var file = ""
    test.plan(3)
    fs.createReadStream("test/output/bundle.js")
      .on("data", function(chunk){
        file += chunk
      })
      .on("end", function(){
        test.ok(/color\s*:\s*red/.test(file), "css transformed")
        test.ok(/# sourceMappingURL=.*\s*$/.test(file), "source map annotation added")
      })
    fs.exists("test/output/bundle.js.map", function(exists){
      test.ok(exists, "source map exists")
    })
  })
})
