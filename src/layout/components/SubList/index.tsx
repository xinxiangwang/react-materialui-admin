import React, { useState, useEffect } from 'react'
import { List, Collapse, ListItem, ListItemText } from '@material-ui/core'
import { ListItemLink } from '../index'
import { ChevronRight } from '@material-ui/icons'
import { ExpandMore } from '@material-ui/icons'
import {
  useListItemStyles as useStyles,
  useIconStyles,
  useCollapseIndentStyles
} from './useStyles'
import { useLocation } from 'react-router-dom'
import { SubListProps, resolvePath } from './sublist'

const SubList: React.FC<SubListProps> = (props) => {
  const { item, basePath, openCollapseArr, closeDrawer } = props

  const [open, setOpen] = useState(false)

  const classes = useStyles()
  const iconClasses = useIconStyles()
  const collapseClasses = useCollapseIndentStyles()

  const { pathname: curPath } = useLocation()

  const CollapseOpenTime = 300

  // let onlyOneChild: OneChild = {
  //   ...item,
  //   path: '',
  //   noShowingChildren: true
  // }

  const handleClick = () => {
    setOpen(!open)
  }

  const openCollapse = () => {
    setOpen(true)
  }
  

  const isActive = (path: string) => {
    return curPath === path ? 'active' : ''
  }

  useEffect(() => {
    (async function() {
      if (curPath === basePath) { // if current list item is active, open all parent components' Collapse
        if (openCollapseArr) {
          for(let i = openCollapseArr.length - 1; i >= 0; i--) {
          // for(let i = 0; i < openCollapseArr.length; i++) {
            await new Promise((resolve) => {
              setTimeout(() => {
                resolve(true)
              }, 10)
            }).then(res => {
              openCollapseArr[i]()
            })
          }
        }
      }
    })()
  }, [curPath, basePath])

  return (
      !item.hidden ?
        <>
          { !item.children ?
            // hasOneShowingChild(item.children, item, onlyOneChild) &&
            // (!onlyOneChild.children || onlyOneChild.noShowingChildren) ?
            <ListItemLink onClick={closeDrawer} classes={{ ...classes, button: isActive(basePath) }} primary={item.meta?.title} to={resolvePath('', basePath)} >
              { item.meta?.icon ? <item.meta.icon fontSize="small" classes={iconClasses} /> : null }
            </ListItemLink> :
            <>
              <ListItem classes={classes} button onClick={handleClick}>
                { item.meta?.icon ? <item.meta.icon fontSize="small" classes={iconClasses} /> : null }
                <ListItemText primary={item.meta?.title} />
                { open ? <ExpandMore /> : <ChevronRight /> }
              </ListItem>

              <Collapse classes={collapseClasses} in={open} timeout={CollapseOpenTime}>
                <List component="div">
                  {
                    item.children?.map((child, index) => (
                      <SubList
                        closeDrawer={closeDrawer}
                        openCollapseArr={ openCollapseArr ? openCollapseArr.concat(openCollapse) : ([] as Array<() => void>).concat(openCollapse) }
                        key={index}
                        item={child}
                        basePath={resolvePath(child.path, basePath)} />
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

export default React.memo(SubList)
