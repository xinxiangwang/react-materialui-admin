import React from 'react';
import './App.scss';
import { Route, Redirect, Switch, Router, useHistory } from 'react-router-dom'
import { constantRoutes } from '@/router'

function App() {
  // const history = useHistory()
  return (
    // <Router history={ history }>
      <Switch>
        {
          constantRoutes.map((route, i) => (
            <Route
              key={route.key || i}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              component={route.component}
            />
          ))
        }
      </Switch>
    // </Router>
  );
}

export default App;
