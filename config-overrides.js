const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackAlias,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  // 添加装饰器
  addDecoratorsLegacy(),

  disableEsLint(),

  // 设置路径别名
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
  }),

  // 按需加载
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),

  // 配置less
  addLessLoader({
    javascriptEnabled: true,
    ModifyVars: { "@primary-color": "#1DA57A" },
    sourceMap: false,
  })
);
