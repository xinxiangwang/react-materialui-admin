import { lazy } from 'react'
const menu1_1 = lazy(() => import('./menu1/menu1-1'))
const menu1_2 = lazy(() => import('./menu1/menu1-2'))
const menu1_3 = lazy(() => import('./menu1/menu1-3'))
const menu2 = lazy(() => import('./menu2'))
const menu1 = lazy(() => import('./menu1'))

export {
  menu1_1,
  menu1_2,
  menu1_3,
  menu2,
  menu1
}
