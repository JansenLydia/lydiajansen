const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.plugins.push(new VueLoaderPlugin());
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    use: ["vue-style-loader", "css-loader", "postcss-loader"]
  });
  storybookBaseConfig.module.rules.push({
    test: /\.(ttf|eot|woff|woff2|svg)$/,
    use: {
      loader: "file-loader",
      options: {
        name: "fonts/[name].[ext]"
      }
    }
  });
  storybookBaseConfig.resolve = {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.join(__dirname, "..", "src")
    }
  };
  return storybookBaseConfig;
};