import React from 'react'
import renderRoutes from '@/utils/renderRoutes'
import { Redirect } from 'react-router-dom'
import { asyncRoutes } from '@/router'

const AppMain: React.FC = () => {
  return (
    <>
      { renderRoutes(asyncRoutes, true) }
      <Redirect to='/dashboard' from='/' />
    </>
  )
}

export default AppMain