import { Link, LinkProps } from 'react-router-dom'
import { ListItem, ListItemText } from '@material-ui/core'
import { useMemo, forwardRef } from 'react'

interface ListItemLinkProps extends LinkProps {
  primary: React.ReactNode
  [propName: string]: any
}

const ListItemLink: React.FC<ListItemLinkProps> = (props) => {
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
      <ListItemText primary={primary}></ListItemText>
    </ListItem>
  )
}

export default ListItemLink
