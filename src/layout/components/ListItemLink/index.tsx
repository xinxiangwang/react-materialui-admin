import { Link, LinkProps } from 'react-router-dom'
import { ListItem, ListItemText } from '@material-ui/core'
import { useMemo, forwardRef } from 'react'

interface ListItemLinkProps extends LinkProps {
  primary: React.ReactNode
}

const ListItemLink: React.FC<ListItemLinkProps> = (props) => {
  const { primary, to } = props
  // const CustomLink = (props: any) => <Link to={to} {...props} />
  const CustomLink = useMemo(() => forwardRef<HTMLAnchorElement, {}>(
    (linkProps, ref) => (
      <Link ref={ref} to={to} {...linkProps} />
    )
  ), [to])
  return (
    <li>
      <ListItem button component={CustomLink}>
        <ListItemText primary={primary}></ListItemText>
      </ListItem>
    </li>
  )
}

export default ListItemLink
