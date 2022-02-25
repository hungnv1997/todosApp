import { ADD_TODO } from './type'

export const addTodo = (todoItem) => {
  return { type: ADD_TODO, payload: todoItem }
}
