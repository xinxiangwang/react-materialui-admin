import React, { useRef, useEffect, useReducer, useContext } from 'react'
import { List } from '@material-ui/core'
import { AppMain, SubList } from './components'
import { asyncRoutes } from '@/router'
import BScroll from 'better-scroll'
import BScrollConstructor from 'better-scroll'
import './index.scss'
import { useListStyles } from './useStyles'

const Layout: React.FC = () => {
  const scrollEL = useRef<HTMLDivElement>(null)
  let scroll: BScrollConstructor

  const classes = useListStyles()

  const scRefresh = (): void => {
    scroll?.refresh()
  }
  
  useEffect(() => {
    if (scrollEL.current) {
      scroll =  new BScroll(scrollEL.current, {
        scrollbar: true,
        mouseWheel: true,
        probeType: 3,
        bounce: false
      })
    }
  })

  return (
    <div className="layout-wrapper">
      <header className="header-wrapper"></header>
      <section className="body-wrapper">
        <div ref={scrollEL} className="scroll-wrapper">
          <List classes={classes} className={"nav-wrapper"} component="nav">
            { asyncRoutes.map(route => (
              <SubList
                scRefresh={scRefresh}
                key={route.path}
                item={route}
                basePath={route.path} />
            )) }
          </List>
        </div>
        <AppMain/>
      </section>
    </div>
  )
}

export default Layout
