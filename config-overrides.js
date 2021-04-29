const { override, addWebpackAlias, useBabelRc } = require("customize-cra")
const path = require('path')

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    "@": path.resolve(__dirname, "./src"),// 指定路径别名
  })
)