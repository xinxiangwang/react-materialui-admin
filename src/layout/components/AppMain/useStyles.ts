import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useMainStyles = makeStyles((theme: Theme) =>
  createStyles({
    appMain: {
      flex: 1,
      flexBasis: 'auto',
      boxSizing: 'border-box',
      padding: theme.spacing(2),
      overflowY: 'auto'
    }
  })
)