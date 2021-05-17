import { RouteComponentProps } from 'react-router-dom'
import { SvgIconComponent } from '@material-ui/icons'
interface MetaInfo {
  title?: string
  icon?: string | SvgIconComponent
  breadcrum?: boolean
  activeMenu?: string
}

export interface RoutesConfig {
  key?: string | number
  meta?: MetaInfo
  path: string
  exact?: boolean
  strict?: boolean
  component?: React.ComponentType<RouteComponentProps>
  children?: Array<RoutesConfig>
  roles?: Array<string>
  hidden?: boolean
}