import React, { useState } from 'react'
import { useHeadStyles, usePoperStyles, useNameStyles, useIntroStyles, useFullIconStyles } from './useStyles'
import { Avatar, IconButton, Toolbar, Popover, Paper, Typography, MenuList, MenuItem, Divider } from '@material-ui/core'
import { Menu as MenuIcon, FullscreenRounded, FullscreenExitRounded } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import fscreen from 'fscreen'
import { IState } from '@/store/types'
import CustomLink from '@/components/CustomLink'
import { logOut } from '@/store/actions/user'

interface HeadProps {
  toogleDrawer: () => void
}

const Head: React.FC<HeadProps> = (props) => {
  const { toogleDrawer } = props

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const [fsc, _] = useState(fscreen)

  const [full, setFull] = useState(false)

  const dispatch = useDispatch()

  const classes = useHeadStyles()
  const poperClasses = usePoperStyles()
  const nameClasses = useNameStyles()
  const introClasses = useIntroStyles()
  const fullIconClasses = useFullIconStyles()

  const user = useSelector((state: IState) => {
    return state.user
  })

  const open = Boolean(anchorEl)

  const id = open ? 'simple-popover' : undefined

  function handler() {
    if (fsc.fullscreenElement !== null) {
      setFull(true)
    } else {
      setFull(false)
    }
   }

  if (fsc.fullscreenEnabled) {
    fsc.addEventListener('fullscreenchange', handler, false);
   }

  const HandleFullClick = () => {
    if (full) {
      fsc.exitFullscreen()
    } else {
      const body = document.querySelector('body')
      body && fsc.requestFullscreen(body)
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLogout = () => {
    dispatch(logOut())
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  
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
          { !full ? <FullscreenRounded classes={fullIconClasses} fontSize="large" onClick={HandleFullClick} /> : <FullscreenExitRounded classes={fullIconClasses} fontSize="large" onClick={HandleFullClick} /> }
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
