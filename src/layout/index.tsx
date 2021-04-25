import React, { useState } from 'react'
import { List, Collapse, ListItem, ListItemText } from "@material-ui/core"
import ListItemLink from './components/ListItemLink'
import AppMain from './components/AppMain'


export default function Layout(props: any, state: any) {
  const [open, setOpen] = useState(true)
  const handleClick = (): void => {
    setOpen(!open)
  }
  console.log('layout渲染')
  return (
    <>
      <List component="nav">
        <ListItemLink primary="dashboard" to="/dashboard"></ListItemLink>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="nested"></ListItemText>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItemLink primary="menu1" to="/nested/menu1">
            <Collapse in={true} timeout="auto" unmountOnExit>
              <List component="div">
                <ListItemLink primary="menu1-1" to="/nested/menu1-1"></ListItemLink>
                <ListItemLink primary="menu1-2" to="/nested/menu1-2"></ListItemLink>
                <ListItemLink primary="menu1-3" to="/nested/menu1-3"></ListItemLink>
              </List>
            </Collapse>
            </ListItemLink>
            <ListItemLink primary="menu2" to="/nested/menu2"></ListItemLink>
          </List>
        </Collapse>
      </List>
      <AppMain/>
    </>
    
  )
}
