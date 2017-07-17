/* eslint no-console:0 */
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import store from './redux/store';
import AsyncRoute from './AsyncRoute';
import FourOhFour from './FourOhFour';
import preload from '../public/data.json';

// if (global) {
//   global.System = { import() {} };
// }

const App = () =>
  <Provider store={store}>
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          component={props =>
            <AsyncRoute props={props} loadingPromise={import('./Landing')} />}
        />
        <Route
          path="/search"
          component={props =>
            <AsyncRoute
              props={{ shows: preload.shows, ...props }}
              loadingPromise={import('./Search')}
            />}
        />
        <Route
          path="/details/:id"
          render={(props: { match: Match }) => {
            const shows = preload.shows.filter(
              show => props.match.params.id === show.imdbID
            );
            return (
              <AsyncRoute
                props={{ show: shows[0], ...props }}
                loadingPromise={import('./Details')}
              />
            );
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Provider>;

export default App;
