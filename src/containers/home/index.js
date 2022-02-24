import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../modules/counter'
import { NewsTask } from '../todos/NewsTask'
import { TodoList } from '../todos/TodoList'
import '../todos/todos.css'
const Home = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-md border border-dark">
        <NewsTask />
      </div>
      <div className="col-md border border-dark todosList pb-5">
        <TodoList />
      </div>
    </div>
  </div>
)

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us'),
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
