import React from 'react'
import ReactDatePicker from 'react-datepicker'
import { connect } from 'react-redux'

export const TodoItemDetail = (props) => {
  return (
    <div className="container border-top border-dark pt-5">
      <div class="row">
        <div class="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Add new task..."
            name="todo task"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <label className="form-label">Description</label>
          <textarea className="w-100" name="description" rows="3"></textarea>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm fs-6">
          <label className="form-label mb-2">Due Date</label>
          <ReactDatePicker
            selected={new Date()}
            // onChange={this.handleChange}
            dateFormat="d MMMM yyyy"
            minDate={new Date()}
          />
        </div>
        <div className="col-sm">
          <label className="form-label  mb-2">Piority</label>
          <select className="w-100 p-1 fs-6 mt-0">
            <option value="Low">Low</option>
            <option value="Normal" selected>
              Normal
            </option>
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
