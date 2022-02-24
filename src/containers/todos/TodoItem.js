import React from 'react'
import { connect } from 'react-redux'

export const TodoItem = (props) => {
  return <div>TodoItem</div>
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
