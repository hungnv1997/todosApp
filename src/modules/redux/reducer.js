import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './type'

const initialState = {
  listTask: [],
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, listTask: [...state.listTask, action.payload] }
    case DELETE_TODO:
      const newListTask = state.listTask.filter((item) => {
        return item.id !== action.payload
      })
      return { ...state, listTask: newListTask }
    case UPDATE_TODO:
      const updateTask = state.listTask.map((task) => {
        if (task.id === action.payload.id) {
          return {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            ...action.payload,
          }
        } else return task
      })
      return {
        listTask: updateTask,
      }
    default:
      return state
  }
}
export default todosReducer
