import React from 'react'
import { useHeadStyles } from './useStyles'
import { Avatar, IconButton, Toolbar } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { IState } from '@/store/types'

interface HeadProps {
  toogleDrawer: () => void
}

const Head: React.FC<HeadProps> = (props) => {
  const { toogleDrawer } = props
  const classes = useHeadStyles()

  const user = useSelector((state: IState) => {
    return state.user
  })
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
          <Avatar variant="rounded" src={user.avatar} />
        </div>
      </Toolbar>
    </header>
  )
}

export default Head
