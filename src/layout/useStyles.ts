import index from '@/pages/404';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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

export const useListItemStyles = makeStyles(() =>
  createStyles({
    root: {
      borderRadius: 16,
      transition: 'color linear',
      "&.active": {
        color: 'rgb(86, 100, 210)',
      },
      "&.active span": {
        fontWeight: 700
      },
      "& span": {
        fontWeight: 500,
        paddingLeft: '2em'
      }
    }
  })
)

/**
 * route left icon
 */
export const useIconStyles = makeStyles(() => 
  createStyles({
    root: {
      position: 'absolute'
    }
  })
)


export const useCollapseIndentStyles = makeStyles({
  container: {
    paddingLeft: '1em'
  }
})


