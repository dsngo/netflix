const path = require('path');
const webpack = require('webpack');

const devPort = 9090;
const config = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${devPort}`,
    'webpack/hot/only-dev-server',
    './js/ClientApp.jsx',
  ],
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, 'public/js/'),
    filename: 'bundle.js',
    publicPath: '/public/js/',
  },
  devServer: {
    hot: true,
    publicPath: '/public/js/',
    historyApiFallback: true,
    port: devPort,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        include: [
          path.resolve(__dirname, 'js'),
          path.resolve('node_modules/preact-compat/src'),
        ],
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },
};

if (process.env.NODE_ENV === 'production') {
  config.entry = './js/ClientApp.jsx';
  delete config.devtool;
  delete config.devServer;
  config.stats.chunks = true;
  config.resolve.alias = {
    react: 'preact-compat',
    'react-dom': 'preact-compat',
  };
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ];
}
module.exports = config;
