import React, { useRef, useEffect, useState } from 'react'
import { List, Hidden, Drawer } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles' 
import BScroll from 'better-scroll'
import BScrollConstructor from 'better-scroll'
import { useSelector } from "react-redux"
import { Redirect, useLocation } from 'react-router-dom'
import { IState } from '@/store/types'
import { asyncRoutes } from '@/router'
import { AppMain, SubList, Head } from './components'
import { useListStyles, useLayoutStyles } from './useStyles'

const Layout: React.FC = () => {
  const theme = useTheme()
  const scrollEL = useRef<HTMLDivElement>(null)
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const listClasses = useListStyles()
  const layoutClasses = useLayoutStyles()
  const { pathname } = useLocation()

  const token = useSelector((state: IState) => {
    return state.user.token
  })

  const [scroll, setScroll] = useState<BScrollConstructor>()

  const scRefresh = () => {
    scroll?.refresh()
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeDrawer = () => {
    if (mobileOpen) {
      setMobileOpen(false)
    }
  }

  const navbar = (
    <div ref={scrollEL} className={layoutClasses.scrollWrapper}>
      <List classes={listClasses} className={"nav-wrapper"} component="nav">
        { asyncRoutes.map(route => (
          <SubList
            closeDrawer={closeDrawer}
            scRefresh={scRefresh}
            key={route.path}
            item={route}
            basePath={route.path} />
        )) }
      </List>
    </div>
  )
  
  useEffect(() => {
    if (scrollEL.current) {
      setScroll(new BScroll(scrollEL.current, {
        scrollbar: true,
        mouseWheel: true,
        probeType: 3,
        bounce: false
      }))
    }
  }, [])

  return (
    token ? (
      <div className={layoutClasses.layoutWrapper}>
        <Head toogleDrawer={handleDrawerToggle} />
        <section className={layoutClasses.bodyWrapper}>
          <Hidden mdUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: layoutClasses.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}>
              { navbar }
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            { navbar }
          </Hidden>
          <AppMain/>
        </section>
      </div>
    ) : <Redirect to={`/login?Redirect=${pathname}`} />
    
  )
}

export default Layout
