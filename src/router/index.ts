import Layout from '@/layout'
import Dashboard from '@/pages/dashboard'
import Nested from '@/pages/nested'
import NotFound from '@/pages/404'

interface MetaInfo {
  roles?: Array<string>
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
  component: React.ComponentType
  children?: Array<RoutesConfig>
}

const routes: Array<RoutesConfig> = [
  {
    path: '/',
    exact: true,
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'nested',
        component: Nested
      }
    ]
  },
  {
    path: '/login',
    component: NotFound
  }
]
export default routes
