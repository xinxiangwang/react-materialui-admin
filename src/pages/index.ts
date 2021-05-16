import LoadAble from '@/utils/loadable'
import { menu1_1, menu1_2, menu1_3, menu2, menu1 } from './nested'
import Profile from './profile'
import MyAccount from './my-account'
import NotFound from './404'
import Login from './login'
const Dashboard = LoadAble(() => import('./dashboard'))
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