import React from 'react'
import { connect } from 'react-redux'
import { NewsTask } from './NewsTask'
import TodoItem from './TodoItem'
import { TodoItemDetail } from './TodoItemDetail'

export const TodoList = (props) => {
  const todoList = [
    {
      id: 1,
      name: 'Code Todo',
      description: 'Code Todo App and push Github',
      priority: 'Normal',
      done: false,
    },
    {
      id: 2,
      name: 'Eat lunch',
      description: 'Eat lunch',
      priority: 'Low',
      done: true,
    },
  ]

  return (
    <div className="container">
      <h1 className="text-center">To Do List</h1>
      {/* Search input */}
      <div class="row">
        <div class="col-sm">
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            name="search-task"
          />
        </div>
      </div>
      {/* todo list */}
      <div class="row mt-3">
        <div className="col-sm">
          {todoList &&
            todoList.map((item) => {
              return (
                <div className="border border-dark my-2 ">
                  <div className="row p-3">
                    <div className=" col-sm d-flex flex-row align-items-center">
                      <div className="px-2">
                        <input className="w-10" type="checkbox" name="" id="" />
                      </div>
                      <TodoItem name={item.name} />
                    </div>
                    <div className=" col-sm d-flex flex-row justify-content-end align-items-center">
                      <button className="btn btn-sm btn-info opacity-75 text-white px-3 ">
                        Detail
                      </button>
                      <button className="btn btn-sm btn-danger opacity-75 mx-2">
                        Remove
                      </button>
                    </div>
                  </div>
                  <TodoItemDetail />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
