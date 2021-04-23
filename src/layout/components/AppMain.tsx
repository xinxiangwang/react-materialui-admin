import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { renderRoutes } from '@/utils/renderRoutes' 
import { routes } from '@/router'

export default function AppMain() {
  return (
    { renderRoutes(routes) }
  )
}
