import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '@/pages/dashboard'
import Nested from '@/pages/nested'

export default function AppMain() {
  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard></Dashboard>
      </Route>
      <Route path="/nested">
        <Nested></Nested>
      </Route>
    </Switch>
  )
}
