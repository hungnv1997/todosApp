import { combineReducers } from 'redux'
import counter from './counter'
import todosReducer from './redux/reducer'
export default combineReducers({
  counter,
  todosReducer,
})
