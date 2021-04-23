import Layout from '@/layout'
import { RouteProps } from 'react-router-dom'
import Dashboard from '@/pages/dashboard'
import Nested from '@/pages/nested'

interface MetaInfo {
  roles?: Array<string>
  title?: string
  icon?: string
  breadcrum?: boolean
  activeMenu?: string
}

export interface RoutesConfig extends RouteProps {
  key?: string | number
  meta?: MetaInfo
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
  }
]
export default routes