const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: "const a = 1;",
      raw: true,
      include: /\.js$/,
    }),
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        ["axios"]: {
          name: "axios",
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
};
