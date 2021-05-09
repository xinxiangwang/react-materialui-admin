import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { constantRoutes } from '@/router'

function App() {
  return (
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
  );
}

export default App;
