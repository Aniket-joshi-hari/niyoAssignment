import React from 'react';
import Home from './pages/home';
import Detail from './pages/movieDetails';
import Favourite from './pages/favourite';
import MovieDetails from './pages/movieDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" component={Detail} />
        <Route path="/favourite" component={Favourite} />
        <Route exact={true} path="/movie/:id" component={MovieDetails} />
      </Switch>
    </Router>

  );
}

export default App;
