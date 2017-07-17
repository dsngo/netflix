const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

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
    filename: '[name]-bundle.js',
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
    chunks: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(jsx|js)?$/,
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
        test: /\.(jsx|js)?$/,
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
if (process.env.NODE_ENV === 'server') {
  config.target = 'node';
  config.externals = [nodeExternals()];
  config.entry = './server.js';
  config.output = {
    path: __dirname,
    filename: 'served-server.js',
    libraryTarget: 'commonjs2',
  };
  delete config.devtool;
  delete config.devServer;
  config.stats.chunks = false;
  config.resolve.alias = {
    react: 'preact-compat',
    'react-dom': 'preact-compat',
  };
  config.plugins = [];
}
if (process.env.NODE_ENV === 'development') {
  config.entry = [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './js/ClientApp.jsx',
  ];
}
if (process.env.NODE_ENV === 'production') {
  config.entry = './js/ClientApp.jsx';
  delete config.devtool;
  delete config.devServer;
  config.stats.chunks = false;
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
    }),
  ];
}
module.exports = config;
