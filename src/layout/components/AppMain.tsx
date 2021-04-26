import React from 'react'
// import renderRoutes from '@/utils/renderRoutes'
import { Route } from 'react-router-dom'
import { asyncRoutes } from '@/router'
import routesFlat from '@/utils/routesFalt'


const AppMain: React.FC = () => {
  const routes = routesFlat(asyncRoutes)
  console.log(routes)
  return (
    <div className="app-main">
      { routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => (
            <route.component {...props} />
          )}
        />
      )) }
    </div>
  )
}

export default AppMain