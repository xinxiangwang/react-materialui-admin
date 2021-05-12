import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { NAV_WRAPPER_WIDTH, HEADER_WRAPPER_HEIGHT } from './style'

export const useListStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'rgb(107, 119, 140)',
      padding: theme.spacing(1),
      width: '100%',
      boxSizing: 'border-box'
    }
  })
)

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
  scrollWrapper: {
    overflow: 'hidden',
    height: `calc(100% - ${HEADER_WRAPPER_HEIGHT})`,
    width: NAV_WRAPPER_WIDTH,
    zIndex: 899,
    position: 'relative',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    borderRight: '1px solid rgba(0, 0, 0, 0.12)'
  },
  drawerPaper: {
    width: NAV_WRAPPER_WIDTH,
    paddingTop: HEADER_WRAPPER_HEIGHT
  }
})


