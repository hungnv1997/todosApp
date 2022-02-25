import React from 'react'
import { NewsTask } from '../todos/NewsTask'
import { TodoList } from '../todos/TodoList'
import '../todos/todos.css'
const Home = () => (
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

export default Home
