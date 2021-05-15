import React from 'react'
import { Route } from 'react-router-dom'
import { asyncRoutes } from '@/router'
import routesFlat from '@/utils/routesFalt'
import { useMainStyles } from './useStyles'

// interface INestedRoutesProps {
//   child: RoutesConfig
//   routePath: string
// }

// const pathJoin = (path: string) => path.startsWith('/') ? '' : '/'

// const NestedRoutes: React.FC<INestedRoutesProps> = (props): any => {
//   const { child, routePath } = props
//   let path = routePath + pathJoin(child.path) + child.path
//   return (
//     child.children ?
//       <Route
//         key={child.path}
//         path={child.path}
//         exact={child.exact}
//         strict={child.strict}
//         render={(props) => (
//           child.component ?
//             <child.component {...props}>
//               { child.children?.map((chl, i) => (<NestedRoutes child={chl} key={i} routePath={path} />))  }
//             </child.component> :
//             <>
//               { child.children?.map((chl, i) => (<NestedRoutes child={chl} key={i} routePath={path} />))  }
//             </>
//         )}
//       />:
//       <Route
//         key={child.path}
//         path={child.path}
//         exact={child.exact}
//         strict={child.strict}
//         render={(props) => (
//           child.component ? <child.component {...props} /> : null
//         )}
//       />
//   )
// }


const AppMain: React.FC = () => {
  const routes = routesFlat(asyncRoutes)

  const classes = useMainStyles()
  return (
    <div className={classes.appMain}>
      { routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => (
            route.component ? <route.component {...props} /> : null
          )}
        />
      )) }
    </div>
  )
}

export default React.memo(AppMain)