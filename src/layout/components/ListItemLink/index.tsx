import { LinkProps } from 'react-router-dom'
import { ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import CustomLink from '@/components/CustomLink'

interface ListItemLinkProps extends LinkProps {
  primary: React.ReactNode
  [propName: string]: any
}

const ListItemLink: React.FC<ListItemLinkProps> = (props) => {
  const { primary, to, children } = props
  return (
    <ListItem {...props} button component={CustomLink(to)}>
      { children }
      <ListItemText primary={primary}></ListItemText>
    </ListItem>
  )
}

export default ListItemLink
