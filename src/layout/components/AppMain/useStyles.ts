import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useMainStyles = makeStyles(() =>
  createStyles({
    appMain: {
      flex: 1,
      flexBasis: 'auto',
      boxSizing: 'border-box'
    }
  })
)