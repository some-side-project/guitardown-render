import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export default {
  // mode: "none",
  entry: "./src/main.js", // 打包入口地址
  output: {
    filename: "guitar-[name]-[fullhash:8].js", // 输出文件名
    path: path.join(import.meta.dirname, "dist"), // 输出文件目录
    libraryTarget: "umd",
    globalObject: "this",
    library: "GdRender",
  },
  resolve: {
    extensions: [".js", ".json", ".wasm"],
  },
  externals: {
    vue: {
      module: "vue",
      commonjs2: "vue",
      commonjs: "vue",
      root: "Vue", // indicates global variable
    },
  },
  devtool: "cheap-module-source-map", // 平衡可读性和构建速度
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(.*)/,
        // include: /node_modules/,
        use: [
          {
            loader: path.resolve(import.meta.dirname, "loaders/cyjcss.js"),
            options: {
              name: "cui",
            },
          },
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          // {
          //   loader: path.resolve(import.meta.dirname, "loaders/cyjcss.js"),
          //   options: {
          //     name: "cui",
          //   },
          // },
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
          },
        ],
        // type: "asset/source",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.gd$/i,
        loader: path.resolve(import.meta.dirname, "loaders/guitardown.js"),
      },
      // 图片字体资源，使用 asset 模块类型，按大小决定是否 base64 编码
      {
        test: /\.(png|jpe?g|gif|webp|svg|eot|ttf|woff|woff2)$/,
        type: "asset",
        generator: {
          filename: "assets/[hash:8][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./examples/index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "guitar-[name].[fullhash:8].css",
    }),
    // https://vuejs.org/api/compile-time-flags.html#configuration-guides
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: "true",
      __VUE_PROD_DEVTOOLS__: "false",
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(import.meta.dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};
