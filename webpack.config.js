const path = require("path");

module.exports = {
    mode: "development",
    entry: __dirname+"/src",
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
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ]
    }
  };