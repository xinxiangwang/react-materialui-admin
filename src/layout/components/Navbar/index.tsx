import React, { useRef, useEffect, useState, useImperativeHandle } from 'react'
import { Paper, List } from '@material-ui/core'
import BScroll from 'better-scroll'
import BScrollConstructor from 'better-scroll'
import ResizeObserver from 'resize-observer-polyfill'
import { asyncRoutes } from '@/router'
import { SubList } from '../index'
import { useNavStyles, useSrollStyles } from './useStyles'
import { throttle } from '@/utils'

interface INavbarProps {
  closeDrawer: () => void
  mobileOpen: boolean
  cRef?: React.RefObject<HTMLDivElement>
}

const Navbar:React.FC<INavbarProps> = (props) => {
  const { closeDrawer, mobileOpen, cRef } = props
  const [scroll, setScroll] = useState<BScrollConstructor>()
  const scrollEL = useRef<HTMLDivElement>(null)
  const scrollContent = useRef<HTMLDivElement>(null)
  const listClasses = useNavStyles()
  const scrollClasses = useSrollStyles(mobileOpen)

  if (cRef) {
    useImperativeHandle(cRef, () => ({
      refresh: () => {
        scroll?.refresh()
      }
    }))
  }

  let ro: ResizeObserver

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
        ro = new ResizeObserver(
          throttle(() => {
            if (scroll) {
              scroll.refresh()
            }
          }, 200)
        )
        scrollContent.current && ro.observe(scrollContent.current)
        return scroll
      }
    })
    return () => {
      scrollContent.current && ro.unobserve(scrollContent.current)
    }
  }, [])
  return (
    <Paper ref={scrollEL} className={scrollClasses.scrollWrapper} variant="outlined" square>
      <List ref={scrollContent} classes={listClasses} className={"nav-wrapper"} component="nav">
        { asyncRoutes.map(route => (
          <SubList
            closeDrawer={closeDrawer}
            key={route.path}
            item={route}
            basePath={route.path} />
        )) }
      </List>
    </Paper>
  )
}

export default Navbar
