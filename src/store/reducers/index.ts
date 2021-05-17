import { combineReducers } from 'redux'
import user from './user'
import permission from './permission'

export default combineReducers({
  user,
  permission
})