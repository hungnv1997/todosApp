import React from 'react'
import { connect } from 'react-redux'

export const NewsTask = (props) => {
  return (
    <>
      <h1>New Task</h1>
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(NewsTask)
