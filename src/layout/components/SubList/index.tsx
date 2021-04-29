import React, { useState } from 'react'
import { List, Collapse, ListItem, ListItemText } from '@material-ui/core'
import { RoutesConfig, asyncRoutes } from '@/router'
import { isExternal } from '@/utils/validate'
import { ListItemLink } from '../index'
import path from 'path'

interface SubListProps {
  item: RoutesConfig
  basePath: string
  /**
   * better-scroll refresh
   */
  scRefresh: () => void
}

interface OneChild extends RoutesConfig {
  noShowingChildren?: boolean
}

const hasOneShowingChild = (child: Array<RoutesConfig> = [], parent: RoutesConfig, oneChild: OneChild): boolean => {
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

const resolvePath = (routePath: string, basePath: string): string => {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(basePath)) {
    return basePath
  }
  console.log(basePath, routePath)
  return path.resolve(basePath, routePath)
}

const SubList: React.FC<SubListProps> = (props) => {
  const { item, basePath, scRefresh } = props

  const [open, setOpen] = useState(true)

  var onlyOneChild: OneChild = {
    ...item,
    path: '',
    noShowingChildren: true
  }

  const CollapseOpenTime = 300

  const handleClick = (): void => {
    setOpen(!open)

    // open collapse，scroll content height has changed， so refresh better-scroll
    setTimeout(() => {
      scRefresh()
    }, CollapseOpenTime)
    
  }
  return (
      !item.hidden ?
        <>
          { hasOneShowingChild(item.children, item, onlyOneChild) &&
            (!onlyOneChild.children || onlyOneChild.noShowingChildren) ?
            <ListItemLink color="red" primary={item.meta?.title} to={resolvePath('', basePath)} /> :
            <>
              <ListItem button onClick={handleClick}>
                <ListItemText primary={item.meta?.title} />
              </ListItem>
              <Collapse in={open} timeout={CollapseOpenTime} unmountOnExit>
                <List component="div">
                  {
                    item.children?.map((child, index) => (
                      <SubList scRefresh={scRefresh} key={index} item={child} basePath={resolvePath(child.path, basePath)} />
                    ))
                  }
                </List>
              </Collapse>
            </>
          }
        </> :
      null
  )
}

export default SubList
