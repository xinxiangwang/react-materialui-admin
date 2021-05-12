import React, { useState } from 'react'
import { useHeadStyles, usePoperStyles, useNameStyles, useIntroStyles, useFullIconStyles } from './useStyles'
import { Avatar, IconButton, Toolbar, Popover, Paper, Typography, MenuList, MenuItem, Divider } from '@material-ui/core'
import { Menu as MenuIcon, FullscreenRounded, FullscreenExitRounded } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { FullScreenHandle } from 'react-full-screen'
import { IState } from '@/store/types'
import CustomLink from '@/components/CustomLink'
import { logOut } from '@/store/actions/user'

interface HeadProps {
  toogleDrawer: () => void
  fullScreenHandle: FullScreenHandle
}

const Head: React.FC<HeadProps> = (props) => {
  const { toogleDrawer, fullScreenHandle: { enter, active, exit } } = props

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const dispatch = useDispatch()

  const classes = useHeadStyles()
  const poperClasses = usePoperStyles()
  const nameClasses = useNameStyles()
  const introClasses = useIntroStyles()
  const fullIconClasses = useFullIconStyles()

  const open = Boolean(anchorEl)

  const id = open ? 'simple-popover' : undefined

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLogout = () => {
    dispatch(logOut())
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
          { !active ? <FullscreenRounded classes={fullIconClasses} fontSize="large" onClick={enter} /> : <FullscreenExitRounded classes={fullIconClasses} fontSize="large" onClick={exit} /> }
          <Popover
            id={id}
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Paper classes={poperClasses} variant="outlined">
              <div className={classes.userInfo}>
                <Typography classes={nameClasses} variant="subtitle2">{user.name}</Typography>
                <Typography title={user.introduction} classes={introClasses} variant="subtitle2">{user.introduction}</Typography>
              </div>
              <Divider />
              <MenuList>
                <MenuItem component={CustomLink('/profile')}>
                  Profile
                </MenuItem>
                <MenuItem component={CustomLink('/account')}>
                  My account
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Paper>
          </Popover>
          <Avatar className={classes.avatar} aria-describedby={id} variant="rounded" src={user.avatar} onClick={handleClick} />
        </div>
      </Toolbar>
    </header>
  )
}

export default Head
