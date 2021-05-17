import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { asyncRoutes } from '@/router'
import routesFlat from '@/utils/routesFalt'
import { useMainStyles } from './useStyles'
import { IState } from '@/store/types'
import { hasPermission } from '@/utils/permission'

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

  const user = useSelector((state: IState) => state.user)

  const classes = useMainStyles()
  return (
    <div className={classes.appMain}>

        { routes.map((route, i) => (
          <Route
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={(props) => {
              if (hasPermission(user.roles || [], route)) {
                return route.component ? <route.component {...props} /> : null
              } else {
                return <Redirect to="/404" />
              }
            }}
          />
        )) }
    </div>
  )
}

export default React.memo(AppMain)