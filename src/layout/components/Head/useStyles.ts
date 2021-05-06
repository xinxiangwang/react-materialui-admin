import { makeStyles, createStyles } from '@material-ui/core/styles';
import { HEADER_WRAPPER_HEIGHT } from '../../style'

export const useHeadStyles = makeStyles(() =>
  createStyles({
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
      padding: '8px',
      justifyContent: 'space-between'
    },
    logo: {
      fontSize: '26px',
      display: 'flex',
      alignItems: 'center'
    },
    userSetting: {
      height: '100%'
    }
  })
)