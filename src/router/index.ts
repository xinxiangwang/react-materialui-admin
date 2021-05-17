import Layout from '@/layout'
import { 
  Dashboard,
  Profile,
  MyAccount,
  NotFound,
  Login,
  menu1_1,
  menu1_2,
  menu1_3,
  menu2,
  menu1,
  Permission
} from '@/pages'

import { LineStyle, Dashboard as DashboardIcon } from '@material-ui/icons'
import { RoutesConfig } from './types'

const asyncRoutes: Array<RoutesConfig> = [
  {
    path: '/dashboard',
    component: Dashboard,
    roles: ['admin'],
    meta: {
      title: 'dashboard',
      icon: DashboardIcon
    }
  },
  {
    path: '/profile',
    component: Profile,
    hidden: true
  },
  {
    path: '/account',
    component: MyAccount,
    hidden: true
  },
  {
    path: '/nested',
    roles: ['admin'],
    exact: true,
    meta: {
      title: 'nested',
      icon: LineStyle
    },
    children: [
      {
        path: 'menu1',
        roles: ['editor'],
        component: menu1,
        exact: true,
        meta: {
          title: 'menu1_1',
          icon: LineStyle
        },
        children: [
          {
            path: 'menu1-1',
            component: menu1_1,
            exact: true,
            roles: ['zzz'],
            meta: {
              title: 'menu1',
              icon: LineStyle
            },
            children: [
              {
                path: 'menu1-1-1/:id',
                component: menu1_1,
                exact: true,
                roles: ['aaa'],
                meta: {
                  title: 'menu1',
                  icon: LineStyle
                },
                hidden: true
              },
              {
                path: 'menu1-1-2',
                exact: true,
                roles: ['bbb'],
                component: menu1_2,
                meta: {
                  title: 'menu1-1-2',
                  icon: LineStyle
                }
              }
            ]
          },
          {
            path: 'menu1-2',
            exact: true,
            component: menu1_2,
            meta: {
              title: 'menu1_2'
            }
          },
          {
            path: 'menu1-3',
            exact: true,
            component: menu1_3,
            meta: {
              title: 'menu1_3'
            }
          }
        ]
      },
      {
        path: 'menu2',
        exact: true,
        roles: ['admin'],
        component: menu2,
        meta: {
          title: 'menu2'
        }
      }
    ]
  },
  {
    path: '/permission',
    meta: {
      title: 'Permission'
    },
    children: [
      {
        path: 'page',
        component: Permission,
        meta: {
          title: 'Page Permission'
        },
        roles: ['admin']
      },
      {
        path: 'directive',
        meta: {
          title: 'Directive Permission'
        },
        roles: ['editor']
      }
    ]
  }
]

const constantRoutes: Array<RoutesConfig> = [
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/404',
    component: NotFound,
    exact: true
  },
  {
    path: '/',
    component: Layout
  }
]
export { constantRoutes, asyncRoutes }
