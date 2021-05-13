import { makeStyles } from '@material-ui/core/styles';
import { NAV_WRAPPER_WIDTH, HEADER_WRAPPER_HEIGHT } from './style'

export const useLayoutStyles = makeStyles({
  layoutWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'rgb(244, 245, 247)'
  },
  bodyWrapper: {
    display: 'flex',
    flex: 1,
    flexBasis: 'auto',
    flexDirection: 'row',
    boxSizing: 'border-box',
    paddingTop: HEADER_WRAPPER_HEIGHT,
    height: '100%'
  },
  drawerPaper: {
    width: NAV_WRAPPER_WIDTH,
    paddingTop: HEADER_WRAPPER_HEIGHT
  }
})


