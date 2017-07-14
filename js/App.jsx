import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import FourOhFour from './FourOhFour';
import Details from './Details';
import preload from '../public/data.json';

const App = () =>
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          path="/search"
          render={props => <Search shows={preload.shows} {...props} />}
        />
        <Route
          path="/details/:id"
          render={(props: { match: Match }) => {
            const shows = preload.shows.filter(
              show => props.match.params.id === show.imdbID
            );
            return <Details show={shows[0]} {...props} />;
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>;

export default App;
