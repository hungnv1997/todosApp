import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../modules/redux/actions'
import { ValidateFormTodo } from './const'

export const NewsTask = (props) => {
  const [newTodo, setNewTodo] = useState({
    name: '',
    description: '',
    priority: 'Normal',
    done: false,
    dueDate: new Date(),
  })
  const [validateName, setValidateName] = useState({ name: false })
  const dispatch = useDispatch()
  //handle event
  const onChangeInput = (e) => {
    if (e.target.name === 'todo-task') {
      setNewTodo({ ...newTodo, name: e.target.value })
      setValidateName({ ...validateName, name: false })
    } else if (e.target.name === 'description') {
      setNewTodo({ ...newTodo, description: e.target.value })
    }
  }
  const handleChangeDate = (e) => {
    setNewTodo({ ...newTodo, dueDate: e })
  }
  const handleChangeSelect = (e) => {
    console.log(e.target.value)
    setNewTodo({ ...newTodo, priority: e.target.value })
  }
  //Add task
  const handleAddNewTodo = () => {
    const valueValidate = ValidateFormTodo([
      { type: 'name', value: newTodo.name },
    ])
    if (valueValidate.includes(true)) {
      let validate = Object.assign({}, validateName)
      validate.name = valueValidate[0]
      setValidateName(validate)
      return
    }
    // dispatch(addTodo(newTodo))
  }
  return (
    <div className="container">
      <h1 className="text-center">New Task</h1>
      <div className="row">
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Add new task..."
            name="todo-task"
            value={newTodo.name}
            onChange={onChangeInput}
          />
          {validateName.name && <p className="text-danger">Name is required</p>}
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
            value={newTodo.description}></textarea>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm fs-6">
          <label className="form-label mb-2">Due Date</label>
          <DatePicker
            selected={newTodo.dueDate}
            onChange={handleChangeDate}
            dateFormat="d MMMM yyyy"
            minDate={new Date()}
          />
        </div>
        <div className="col-sm">
          <label className="form-label  mb-2">Piority</label>
          <select
            className="w-100 p-1 fs-6 mt-0"
            defaultValue={newTodo.priority}
            onChange={handleChangeSelect}>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="Hight">Hight</option>
          </select>
        </div>
      </div>
      <div className="row mt-5 ">
        <div className="col-sm pb-5">
          <button
            className="btn btn-success opacity-75 w-100"
            onClick={handleAddNewTodo}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsTask
