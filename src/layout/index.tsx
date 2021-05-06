import React, { useRef, useEffect, useReducer, useContext } from 'react'
import { List, Hidden, Drawer } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles' 
import { AppMain, SubList, Head } from './components'
import { asyncRoutes } from '@/router'
import BScroll from 'better-scroll'
import BScrollConstructor from 'better-scroll'
import { useListStyles, useLayoutStyles } from './useStyles'

const Layout: React.FC = () => {
  const theme = useTheme()
  const scrollEL = useRef<HTMLDivElement>(null)
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const listClasses = useListStyles()
  const layoutClasses = useLayoutStyles()

  let scroll: BScrollConstructor

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
      scroll =  new BScroll(scrollEL.current, {
        scrollbar: true,
        mouseWheel: true,
        probeType: 3,
        bounce: false
      })
    }
  })

  return (
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
  )
}

export default Layout
