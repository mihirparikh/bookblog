const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/client/index.html"
});

module.exports = {
  entry: "./src/client/index.js",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  //   resolve: {
  //     extensions: [".js"]
  //   },
  output: {
    //filename: 'bundle.js',
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [htmlPlugin]
};
