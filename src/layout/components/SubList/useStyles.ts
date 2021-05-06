import { makeStyles, createStyles } from '@material-ui/core/styles';

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