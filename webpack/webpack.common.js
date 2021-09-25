const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function normalizeName(name) {
  return name.replace(/node_modules/g, "nodemodules").replace(/[\-_.|]+/g, " ")
    .replace(/\b(vendors|nodemodules|js|modules|es)\b/g, "")
    .trim().replace(/ +/g, "-");
}

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  output: {
    clean: true,
    path: path.resolve(__dirname, '..', './build'),
    filename: (pathData) => {
      return pathData.chunk.name === 'vendor' ? '[name].js' : '[name].[hash].js';
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
        },
      },
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
      favicon: './public/favicon.ico',
    }),
    new CleanWebpackPlugin(),
  ],
  stats: {
    colors: true,
  },
}