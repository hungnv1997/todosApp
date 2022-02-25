import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { connect } from 'react-redux'

export const TodoItemDetail = ({ todoObject }) => {
  const { id, name, description, priority, done, dueDate } = todoObject
  const [updateTodo, setUpdateTodo] = useState(todoObject)
  //handle event
  const onChangeInput = (e) => {
    if (e.target.name === 'todo-task') {
      setUpdateTodo({ ...updateTodo, name: e.target.value })
    } else if (e.target.name === 'description') {
      setUpdateTodo({ ...updateTodo, description: e.target.value })
    }
  }
  const handleChangeDate = (e) => {
    setUpdateTodo({ ...updateTodo, dueDate: e })
  }
  const handleChangeSelect = (e) => {
    console.log(e.target.value)
    setUpdateTodo({ ...updateTodo, priority: e.target.value })
  }
  return (
    <div className="container border-top border-dark pt-5">
      <div className="row">
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            value={updateTodo.name}
            onChange={onChangeInput}
            placeholder="Add new task..."
            name="todo-task"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <label className="form-label">Description</label>
          <textarea
            className="w-100"
            name="description"
            rows="3"
            onChange={onChangeInput}
            value={updateTodo.description}></textarea>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm fs-6">
          <label className="form-label mb-2">Due Date</label>
          <ReactDatePicker
            selected={updateTodo.dueDate}
            onChange={handleChangeDate}
            dateFormat="d MMMM yyyy"
            minDate={new Date()}
          />
        </div>
        <div className="col-sm">
          <label className="form-label  mb-2">Piority</label>
          <select
            className="w-100 p-1 fs-6 mt-0"
            defaultValue={priority}
            onChange={handleChangeSelect}>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="Hight">Hight</option>
          </select>
        </div>
      </div>
      <div className="row mt-5 ">
        <div className="col-sm pb-5">
          <button className="btn btn-success opacity-75 w-100">Update</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemDetail)
