import React, { Suspense } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { asyncRoutes } from '@/router'
import routesFlat from '@/utils/routesFalt'
import { useMainStyles } from './useStyles'
import { IState } from '@/store/types'
import { hasPermission } from '@/utils/permission'
import Breadcrum, { IBreadcrumMap } from '../Breadcrum'
import LazyLoading from '@/components/LazyLoading'
// import ErrorBoundary from '@/components/ErrorBoundary'

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
  const breadcrumMap: IBreadcrumMap = {}
  const routes = routesFlat(asyncRoutes, (route) => {
    if (route.meta?.title) {
      breadcrumMap[route.path] = {
        title: route.meta.title,
        click: !!route.component
      }
    }
  })

  const history = useHistory()

  const user = useSelector((state: IState) => state.user)

  const classes = useMainStyles()
  return (
    <div className={classes.appMain}>
      {/* <ErrorBoundary fallback={<LazyLoading />}> */}
        <Suspense fallback={<LazyLoading />}>
          <Breadcrum breadcrumMap={breadcrumMap} />
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
                  history.replace('/404')
                  return null
                }
              }}
            />
          )) }
        </Suspense>
      {/* </ErrorBoundary> */}
    </div>
  )
}

export default React.memo(AppMain)