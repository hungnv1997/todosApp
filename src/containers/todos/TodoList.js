import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BulkActions from './BulkActions'
import TodoItem from './TodoItem'
import './todos.css'
export const TodoList = () => {
  const todoList = useSelector((state) => state.TodosReducer.listTask)
  const [arrCheckbox, setArrCheckbox] = useState([])
  return (
    <div className="container ">
      <h1 className="text-center">To Do List</h1>
      {/* Search input */}
      <div className="row">
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            name="search-task"
          />
        </div>
      </div>
      {/* todo list */}
      <div className="row mt-3">
        <div className="col-sm">
          {todoList &&
            todoList.length > 0 &&
            todoList.map((item) => {
              return (
                <div className="border border-dark my-2 " key={item.id}>
                  <TodoItem
                    todoObject={item}
                    setArrCheckbox={setArrCheckbox}
                    arrCheckbox={arrCheckbox}
                  />
                </div>
              )
            })}
        </div>
      </div>
      {/* Bulk Action */}
      {arrCheckbox.length > 0 && <BulkActions />}
    </div>
  )
}

export default TodoList
