import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export const useLoginStyles = makeStyles((theme: Theme) =>
  createStyles({
    login: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginFormWrapper: {
      width: '500px',
      height: '500px',
      backgroundColor: 'pink'
    }
  })
)
