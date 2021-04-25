import Layout from '@/layout'
import Dashboard from '@/pages/dashboard'
import { menu1_1, menu1_2, menu1_3, menu2, menu1 } from '@/pages/nested'
import NotFound from '@/pages/404'
import Login from '@/pages/login'

interface MetaInfo {
  title?: string
  icon?: string
  breadcrum?: boolean
  activeMenu?: string
}

export interface RoutesConfig {
  key?: string | number
  meta?: MetaInfo
  path: string
  exact?: boolean
  strict?: boolean
  component?: React.ComponentType
  children?: Array<RoutesConfig>
  roles?: Array<string>
}

const asyncRoutes: Array<RoutesConfig> = [
  {
    path: '/dashboard',
    component: Dashboard,
    roles: ['admin']
  },
  {
    path: '/nested/menu1',
    roles: ['admin'],
    component: menu1,
    children: [
      {
        path: 'menu1-1',
        component: menu1_1
      },
      {
        path: 'menu1-2',
        component: menu1_2
      },
      {
        path: 'menu1-3',
        component: menu1_3
      }
    ]
  },
  {
    path: '/nested/menu2',
    roles: ['admin'],
    component: menu2
  },
  
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
