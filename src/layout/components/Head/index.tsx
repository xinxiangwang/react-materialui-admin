import React from 'react'
import { useHeadStyles } from './useStyles'
import { Avatar, IconButton, Toolbar } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

interface HeadProps {
  toogleDrawer: () => void
}

const Head: React.FC<HeadProps> = (props) => {
  const { toogleDrawer } = props
  const classes = useHeadStyles()
  return (
    <header className={classes.headerWrapper}>
      <Toolbar className={classes.root}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toogleDrawer}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.logo}>
          LOGO
        </div>
        <div className={classes.userSetting}>
          <Avatar variant="rounded" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
        </div>
      </Toolbar>
    </header>
  )
}

export default Head
