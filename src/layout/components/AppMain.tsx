import React from 'react'
import renderRoutes from '@/utils/renderRoutes' 
import routes from '@/router'

const AppMain: React.FC = () => {
  return (
    <>
      { renderRoutes(routes, true) }
    </>
  )
}

export default AppMain