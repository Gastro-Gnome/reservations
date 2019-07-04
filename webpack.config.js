const path = require("path");

module.exports = {
    mode: "development",
    entry: __dirname+"/src/index.js",
    watch: true,
    output: {
        path: __dirname+"/dist",
        filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };