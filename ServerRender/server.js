/* eslint no-console: 0 */
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');
const compression = require('compression');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
// const webpack = require('webpack');
// const config = require('../webpack.config');

const PORT = process.env.PORT || 3030;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);
const App = require('../js/App').default;

const server = express();
server.use(compression());
// Useful for testing server with hot module reload, can create lots of hashes
// if (process.env.NODE_ENV === 'development') {
//   const compiler = webpack(config);
//   server.use(
//     webpackDevMiddleware(compiler, {
//       publicPath: config.output.publicPath,
//     })
//   );
//   server.use(webpackHotMiddleware(compiler));
// }
// Fallback to /public/ for static file serving
server.use('/public/', express.static('public'));
server.use((req, res) => {
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      { location: req.url, context },
      React.createElement(App)
    )
  );
  if (context.url) {
    res.redirect(context.url);
  }
  res.write(template({ body }));
  res.end();
});
console.log(`Listening on port: ${PORT}`);
server.listen(PORT);
