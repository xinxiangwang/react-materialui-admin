import React, { useState } from 'react'
import { List, Collapse } from '@material-ui/core'
import { AppMain, SubList } from './components/index'
import { asyncRoutes, RoutesConfig } from '@/router'
import { Route } from 'react-router'

const RecursionList = (routes: Array<RoutesConfig>) => {
  const listResult: Array<RoutesConfig> = []
  let pathJoin = (path: string) => path.startsWith('/') ? '' : '/'
  routes.forEach(route => {
    
  })
}

const Layout: React.FC = () => {
  return (
    <List component="nav">
      { asyncRoutes.map(route => (<SubList key={route.path} item={route} basePath={route.path} />)) }
      {/* <List component="nav">
        <ListItemLink primary="dashboard" to="/dashboard"></ListItemLink>
        <SubList primary="nested">
          <List component="div">
            <ListItemLink primary="menu1" to="/nested/menu1">
            <Collapse in={true} timeout="auto" unmountOnExit>
              <List component="div">
                <ListItemLink primary="menu1-1" to="/nested/menu1-1"></ListItemLink>
                <ListItemLink primary="menu1-2" to="/nested/menu1-2"></ListItemLink>
                <ListItemLink primary="menu1-3" to="/nested/menu1-3"></ListItemLink>
              </List>
            </Collapse>
            </ListItemLink>
            <ListItemLink primary="menu2" to="/nested/menu2"></ListItemLink>
          </List>
        </SubList>
      </List> */}
      <AppMain/>
    </List>
    
  )
}

export default Layout
