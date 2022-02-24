import React from 'react'
import { connect } from 'react-redux'

export const TodoList = (props) => {
  return (
    <div className="container">
      <h1 className="text-center">To Do List</h1>
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
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
