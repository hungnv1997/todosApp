import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TodoItemDetail } from './TodoItemDetail'

export const TodoItem = ({ todoObject }) => {
  const [showDetail, setShowDetail] = useState(false)
  const { name, id } = todoObject
  return (
    <>
      <div className="row p-3">
        <div className=" col-sm d-flex flex-row align-items-center">
          <div className="px-2">
            <input className="w-10" type="checkbox" name="" id="" />
          </div>
          <div>{name}</div>
        </div>
        <div className=" col-sm d-flex flex-row justify-content-end align-items-center">
          <button
            className="btn btn-sm btn-info opacity-75 text-white px-3 "
            onClick={() => setShowDetail(!showDetail)}>
            Detail
          </button>
          <button className="btn btn-sm btn-danger opacity-75 mx-2">
            Remove
          </button>
        </div>
      </div>
      {showDetail && <TodoItemDetail todoObject={todoObject} />}
    </>
  )
}

export default TodoItem
