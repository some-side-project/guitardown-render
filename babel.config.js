export default {
  sourceType: "module",
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: false, // polyfill 就交给宿主环境得了。
        corejs: 3,
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
      },
    ],
  ],
};
