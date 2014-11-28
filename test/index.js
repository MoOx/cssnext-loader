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
        test.equal(/color\s*:\s*red/.test(file), true)
        test.end()
      })
  })
})
