import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './compornets/Nav'

import Events from './pages/Events'
import Teams from './pages/Teams'
import EventDetail from './pages/EventDetail'
import TeamDetail from './pages/TeamDetail'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Events}/>
        <Route exact path="/Teams" component={Teams}/>
        <Route exact path="/TeamDetail/:id" component={TeamDetail}/>
        <Route exact path="/EventDetail/:id" component={EventDetail}/>
        <Route exact path="/AboutUs" component={AboutUs}/>
      </Switch>
    </Router>
  );
}

export default App;
