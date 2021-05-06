import { makeStyles, createStyles } from '@material-ui/core/styles';
import { NAV_WRAPPER_WIDTH, HEADER_WRAPPER_HEIGHT } from './style'

export const useListStyles = makeStyles(() =>
  createStyles({
    root: {
      color: 'rgb(107, 119, 140)',
      padding: 8,
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
    height: '100%',
    width: NAV_WRAPPER_WIDTH,
    zIndex: 899,
    position: 'relative',
    backgroundColor: '#fff'
  }
})


