const { defineConfig } = require("@vue/cli-service")
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // URL for backend
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .exclude.add(/monaco-editor/)
      .end()
  },

  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        languages: ["javascript", "python", "html", "css"],
      }),
    ],
  },
})
