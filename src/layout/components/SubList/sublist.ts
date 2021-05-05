import { isExternal } from '@/utils/validate'
import { RoutesConfig } from '@/router'
import path from 'path'

export interface SubListProps {
  item: RoutesConfig
  basePath: string
  /**
   * better-scroll refresh
   */
  scRefresh: () => void
  openCollapseArr?: Array<() => void>
}

export interface OneChild extends RoutesConfig {
  noShowingChildren?: boolean
}

export const hasOneShowingChild = (child: Array<RoutesConfig> = [], parent: RoutesConfig, oneChild: OneChild): boolean => {
  const showingChildren = child.filter(item => {
    if (item.hidden) {
      return false
    } else {
      oneChild = item
      return true
    }
  })
  if (showingChildren.length === 1) return true

  if (showingChildren.length === 0) {
    oneChild = { ...parent, path: '', noShowingChildren: true }
    return true
  }

  return false
}

export const resolvePath = (routePath: string, basePath: string): string => {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(basePath)) {
    return basePath
  }
  return path.resolve(basePath, routePath)
}