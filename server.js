require('babel-register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');

const PORT = 3030;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);
const App = require('./js/App').default;

const server = express();

server.use('/public', express.static('public')); // Make sure to understand this
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
console.log(`Listening on port: ${PORT}`); // eslint-disable-line
server.listen(PORT);
