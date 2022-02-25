import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './type'

export const addTodo = (todoItem) => {
  return { type: ADD_TODO, payload: todoItem }
}
export const deleteTodo = (id) => {
  return { type: DELETE_TODO, payload: id }
}
export const updateTodo = (id) => {
  return { type: UPDATE_TODO, payload: id }
}
