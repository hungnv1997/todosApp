import React, { useState } from 'react'
import { connect } from 'react-redux'
import BulkActions from './BulkActions'
import TodoItem from './TodoItem'
import './todos.css'
export const TodoList = (props) => {
  const todoList = [
    {
      id: 1,
      name: 'Code Todo',
      description: 'Code Todo App and push Github',
      priority: 'Normal',
      dueDate: '',
      done: false,
    },
    {
      id: 2,
      name: 'Eat lunch',
      description: 'Eat lunch',
      priority: 'Low',
      dueDate: '',
      done: true,
    },
  ]
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
