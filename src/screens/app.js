import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './homeScreen/home';
import Privacy from './privacyScreen/privacy';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
