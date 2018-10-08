// module.exports = {
//     module: {
//         loaders: [
//             {
//                 test:   /\.css$/,
//                 loader: "style-loader!css-loader!postcss-loader"
//             }
//         ]
//     },
//     postcss: function (webpack) {
//         return [
//             require("postcss-import")({ addDependencyTo: webpack }),
//             // require("postcss-url")(),
//             require("postcss-cssnext")(),
//             // add your "plugins" here
//             // ...
//             // and if you want to compress,
//             // just use css-loader option that already use cssnano under the hood
//             require("postcss-browser-reporter")(),
//             require("postcss-reporter")()
//         ]
//     }
// };

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-preset-env': {},
    'postcss-url': {},
    'cssnano': {},
    'postcss-browser-reporter': {},
    'postcss-reporter': {},
  },
};