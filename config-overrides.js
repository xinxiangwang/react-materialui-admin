const { override, addWebpackAlias} = require("customize-cra")
const path = require('path')

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "./src"),// 指定路径别名
  })
)