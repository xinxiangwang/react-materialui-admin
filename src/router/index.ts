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
  Permission,
  PermissionTwo,
  EditTable
} from '@/pages'

import { LineStyle, Dashboard as DashboardIcon } from '@material-ui/icons'
import { RoutesConfig } from './types'

const asyncRoutes: Array<RoutesConfig> = [
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      title: 'dashboard',
      icon: DashboardIcon
    }
  },
  {
    path: '/profile',
    component: Profile,
    hidden: true,
    meta: {
      title: 'profile'
    },
  },
  {
    path: '/account',
    component: MyAccount,
    hidden: true,
    meta: {
      title: 'account'
    }
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
        exact: true,
        meta: {
          title: 'menu1_1',
          icon: LineStyle
        },
        children: [
          {
            path: 'menu1-1',
            meta: {
              title: 'menu1',
              icon: LineStyle
            },
            children: [
              {
                path: 'menu1-1-2',
                exact: true,
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
        path: 'page2',
        component: PermissionTwo,
        meta: {
          title: 'Page Permission'
        }
      }
    ]
  },
  {
    path: '/editTable',
    meta: {
      title: 'EditTable'
    },
    component: EditTable
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
