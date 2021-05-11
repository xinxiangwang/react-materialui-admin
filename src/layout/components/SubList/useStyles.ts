import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useListItemStyles = makeStyles(() =>
  createStyles({
    root: {
      borderRadius: 12,
      transition: 'color linear',
      "&.active": {
        color: 'rgb(86, 100, 210)',
      },
      "&.active span": {
        fontWeight: 700
      },
      "& span": {
        fontWeight: 500
      }
    }
  })
)

/**
 * route left icon
 */
export const useIconStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      marginRight: theme.spacing(1)
    }
  })
)

export const useCollapseIndentStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingLeft: theme.spacing(2)
    }
  })
)