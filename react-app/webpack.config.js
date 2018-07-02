const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (env, options) {
  const isProduction = options.mode === "production";

  const config = {
    context: path.join(__dirname, "src"),
    entry: "./",
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",

    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    module: {
      rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
        options: {
          useCache: false
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        })
      }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "OM",
        hash: true,
        template: path.resolve(__dirname, "./index.html")
      }),
      new ExtractTextPlugin({
        filename: "style.css"
      })
    ],

    devServer: {
      contentBase: "./dist"
    }
  };

  return config;
};
