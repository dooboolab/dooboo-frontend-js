const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/App.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [],
  resolve: {
    modules: [
      './node_modules',
    ],
    extensions: ['.js', 'jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    inline: true,
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true,
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-flow'
              ],
              plugins: [
                'react-hot-loader/babel',
                '@babel/plugin-proposal-function-sent',
                '@babel/plugin-proposal-export-namespace-from',
                '@babel/plugin-proposal-numeric-separator',
                '@babel/plugin-proposal-throw-expressions',
                ['@babel/plugin-proposal-class-properties', { 'loose': true }],
                [
                  '@babel/plugin-transform-runtime',
                  {
                    'helpers': true,
                    'regenerator': false
                  }
                ]
              ]
            },
          },
        ],
        exclude: [/node_modules/],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
};
