import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import todosReducer from './redux/reducer'
const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    TodosReducer: todosReducer,
  })
export default rootReducer
