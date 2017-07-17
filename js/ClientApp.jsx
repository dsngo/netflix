import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import Perf from 'react-addons-perf'; // Optimizing purposes
import App from './App';

// window.Perf = Perf;
// Perf.start();

const renderApp = () => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('app')
  );
};
renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
