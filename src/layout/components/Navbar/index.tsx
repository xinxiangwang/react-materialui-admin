import React, { useRef, useEffect, useState, useImperativeHandle } from 'react'
import { Paper, List, debounce } from '@material-ui/core'
import BScroll from 'better-scroll'
import BScrollConstructor from 'better-scroll'
import ResizeObserver from 'resize-observer-polyfill'
import { useSelector } from 'react-redux'
import { SubList } from '../index'
import { useNavStyles, useSrollStyles } from './useStyles'
import { IState } from '@/store/types'

interface INavbarProps {
  closeDrawer: () => void
  mobileOpen: boolean
}

export interface INavBarFunc {
  refresh: () => void
}

const Navbar = React.forwardRef<INavBarFunc, INavbarProps>((props, ref) => {
  const { closeDrawer, mobileOpen } = props
  const [scroll, setScroll] = useState<BScrollConstructor>()
  const scrollEL = useRef<HTMLDivElement>(null)
  const scrollContent = useRef<HTMLDivElement>(null)
  const listClasses = useNavStyles()
  const scrollClasses = useSrollStyles(mobileOpen)

  const permission = useSelector((state: IState) => {
    return state.permission
  })

  useImperativeHandle(ref, () => ({
    refresh: () => {
      scroll?.refresh()
    }
  }))
  const ro = useRef<ResizeObserver>()

  useEffect(() => {
    setScroll(scroll => {
      if (scrollEL.current) {
        scroll = new BScroll(scrollEL.current, {
          scrollbar: true,
          probeType: 3,
          bounce: false,
          mouseWheel: true,
          click: true,
          preventDefault: true
        })
        ro.current = new ResizeObserver(
          debounce(() => {
            if (scroll) {
              scroll.refresh()
            }
          }, 200)
        )
        scrollContent.current && ro.current.observe(scrollContent.current)
        return scroll
      }
    })
    return () => {
      scrollContent.current && ro.current && ro.current.unobserve(scrollContent.current)
    }
  }, [])
  return (
    <Paper ref={scrollEL} className={scrollClasses.scrollWrapper} variant="outlined" square>
      <List ref={scrollContent} classes={listClasses} className={"nav-wrapper"} component="nav">
        { permission.map(route => (
          <SubList
            closeDrawer={closeDrawer}
            key={route.path}
            item={route}
            basePath={route.path} />
        )) }
      </List>
    </Paper>
  )
})

export default Navbar
