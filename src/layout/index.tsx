import React, { useCallback, useEffect, useRef } from 'react'
import { Hidden, Drawer } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles' 
import { useSelector, useDispatch } from "react-redux"
import { Redirect, useLocation } from 'react-router-dom'
import { IState } from '@/store/types'
import { AppMain, Navbar, Head } from './components'
import { INavBarFunc } from './components/Navbar'
import { useLayoutStyles } from './useStyles'
import { setInfo, logOut } from '@/store/actions/user'
import { getUserInfoByToken } from '@/apis/user'

const Layout: React.FC = () => {
  const theme = useTheme()
  const childRef = useRef<INavBarFunc>(null)
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const layoutClasses = useLayoutStyles()
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const token = useSelector((state: IState) => {
    return state.user.token
  })

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(open => !open)

    // fixed scrollbar can't scroll to the bottom when open drawer
    setTimeout(() => {
      childRef.current?.refresh()
    }, 300)
  }, [])

  const closeDrawer = useCallback(() => {
    setMobileOpen(false)
  }, [])

  useEffect(() => {
    if (token) {
      getUserInfoByToken({ token }).then(res => {
        if (res.data) {
          console.log(res)
          dispatch(setInfo({
            token,
            ...res.data
          }))
        } else {
          throw new Error()
        }
      }).catch(err => {
        dispatch(logOut())
      })
    }
  }, [token, dispatch])

  

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
              <Navbar ref={childRef} mobileOpen={mobileOpen} closeDrawer={closeDrawer} />
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Navbar mobileOpen={false} closeDrawer={()=> {}} />
          </Hidden>
          <AppMain/>
        </section>
      </div>
    ) : <Redirect to={`/login` + (pathname === '/' ? '' : `?Redirect=${pathname}`)} />
  )
}

export default Layout
