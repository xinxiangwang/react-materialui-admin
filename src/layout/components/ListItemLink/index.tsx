import { Link } from 'react-router-dom'
import { ListItem, ListItemText } from '@material-ui/core'
import { useMemo, forwardRef } from 'react'

export default function ListItemLink(props: any) {
  const { primary, to } = props
  // const CustomLink = (props: any) => <Link to={to} {...props} />
  const CustomLink = useMemo(() => forwardRef<HTMLAnchorElement, {}>(
    (linkProps, ref) => (
      <Link ref={ref} to={to} {...linkProps} />
    )
  ), [to])
  return (
    <li>
      { console.log("菜单渲染") }
      <ListItem button component={CustomLink}>
        <ListItemText primary={primary}></ListItemText>
      </ListItem>
    </li>
  )
}