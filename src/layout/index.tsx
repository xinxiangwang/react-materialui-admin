import React, { useState } from 'react'
import { List, Collapse, ListItem, ListItemText } from "@material-ui/core"
import ListItemLink from './components/ListItemLink'
import AppMain from './components/AppMain'


export default function Layout() {
  const [open, setOpen] = useState(true)
  const handleClick = (): void => {
    setOpen(!open)
  }
  return (
    <>
      <List component="nav">
        <ListItemLink primary="dashboard" to="/dashboard"></ListItemLink>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="nested"></ListItemText>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItemLink primary="nested-1" to="/nested"></ListItemLink>
          </List>
        </Collapse>
      </List>
      <AppMain/>
    </>
    
  )
}
