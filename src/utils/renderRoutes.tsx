import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { RoutesConfig } from '@/router'

const renderRoutes = (routes: Array<RoutesConfig>, authed: boolean, authPath: string = 'login', extraProps: any = {}, switchProps = {}) => routes ? (
  <Switch { ...extraProps }>
    {
      routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => {
            if (!route.meta?.roles) {
              return <route.component { ...props } { ...extraProps } route={route} />
            }
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          }}
        />
      ))
    }
  </Switch>
) : null