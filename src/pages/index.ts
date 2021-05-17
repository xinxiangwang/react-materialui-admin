import { lazy } from 'react'
import { menu1_1, menu1_2, menu1_3, menu2, menu1 } from './nested'
const Dashboard = lazy(() => import('./dashboard'))
const Profile = lazy(() => import('./profile'))
const MyAccount = lazy(() => import('./my-account'))
const NotFound = lazy(() => import('./404'))
const Login = lazy(() => import('./login'))
export {
  Dashboard,
  Profile,
  MyAccount,
  NotFound,
  Login,
  menu1_1,
  menu1_2,
  menu1_3,
  menu2,
  menu1
}