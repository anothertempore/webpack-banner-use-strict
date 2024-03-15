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
      banner: "const hello = 'fromBannerPlugin';",
      raw: true,
      include: /\.js$/,
    }),
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        ["async"]: {
          name: "async",
          chunks: "all",
          enforce: true,
          test: (module) => {
            console.log({ u: module.userRequest });
            if (module.userRequest && module.userRequest.includes("async")) {
              return true;
            }
            return false;
          },
        },
      },
    },
  },
};
