import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { RoutesConfig } from '@/router'

const renderRoutes = (routes: Array<RoutesConfig>, authed: boolean, authPath: string = '/login', extraProps: any = {}, switchProps = {}) => routes ? (
  <>
    {
      routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => {
            if (!route.roles || authed || route.path === authPath) {
              return <route.component { ...props } { ...extraProps } route={route} />
            }
            return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
          }}
        />
      ))
    }
  </>
) : null

export default renderRoutes