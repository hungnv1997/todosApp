import React from 'react'
import { connect } from 'react-redux'

export const TodoList = (props) => {
  return (
    <div className="container">
      <h1>To Do List</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
