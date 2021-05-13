import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { NAV_WRAPPER_WIDTH, HEADER_WRAPPER_HEIGHT } from '../../style'

export const useNavStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'rgb(107, 119, 140)',
      padding: theme.spacing(1),
      width: '100%',
      boxSizing: 'border-box'
    }
  })
)

export const useSrollStyles = makeStyles((theme: Theme) =>
  createStyles({
    scrollWrapper: {
      overflow: 'hidden',
      height: mobileOpen => mobileOpen ? `calc(100% - ${HEADER_WRAPPER_HEIGHT})` : '100%',
      width: NAV_WRAPPER_WIDTH,
      zIndex: 899,
      position: 'relative',
      backgroundColor: '#fff',
      boxSizing: 'border-box',
      borderRight: '1px solid rgba(0, 0, 0, 0.12)'
    }
  })
)


