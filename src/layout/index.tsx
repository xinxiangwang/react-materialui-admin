import React from 'react'
import { List } from '@material-ui/core'
import { AppMain, SubList } from './components/index'
import { asyncRoutes } from '@/router'
import './index.scss'

const Layout: React.FC = () => {
  return (
    <div className="layout-wrapper">
      <header className="header-wrapper"></header>
      <section className="body-wrapper">
        <List component="nav" className="nav-wrapper">
          { asyncRoutes.map(route => (<SubList key={route.path} item={route} basePath={route.path} />)) }
        </List>
        <AppMain/>
      </section>
      
    </div>
  )
}

export default Layout
