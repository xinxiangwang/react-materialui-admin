import { Link, LinkProps } from 'react-router-dom'
import { ListItem, ListItemText } from '@material-ui/core'
import { useMemo, forwardRef } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: blueGrey[500],
      fontWeight: 700
    }
  })
);

interface ListItemLinkProps extends LinkProps {
  primary: React.ReactNode
}

const ListItemLink: React.FC<ListItemLinkProps> = (props) => {
  const classes = useStyles()
  const { primary, to, children } = props
  // const CustomLink = (props: any) => <Link to={to} {...props} />
  const CustomLink = useMemo(() => forwardRef<HTMLAnchorElement, {}>(
    (linkProps, ref) => (
      <Link ref={ref} to={to} {...linkProps} />
    )
  ), [to])
  return (
    <ListItem {...props} button component={CustomLink}>
      { children }
      <ListItemText className={classes.root} primary={primary}></ListItemText>
    </ListItem>
  )
}

export default ListItemLink
