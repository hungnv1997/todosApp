import { ADD_TODO } from './type'

const initialState = {
  listTask: [],
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, listTask: [...state.listTask, action.payload] }
    default:
      return state
  }
}
export default todosReducer
