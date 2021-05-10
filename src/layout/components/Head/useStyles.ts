import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { HEADER_WRAPPER_HEIGHT } from '../../style'

export const useHeadStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    },
    headerWrapper: {
      width: '100%',
      backgroundColor: 'rgb(86, 100, 210)',
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0,
      boxSizing: 'border-box',
      height: HEADER_WRAPPER_HEIGHT,
      zIndex: 999,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center'
    },
    logo: {
      fontSize: '26px',
      display: 'flex',
      alignItems: 'center'
    },
    userSetting: {
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    }
  })
)