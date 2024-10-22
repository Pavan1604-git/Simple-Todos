import './index.css'
import {Component} from 'react'

import TodoItem from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodo extends Component {
  state = {
    todoDetailList: initialTodosList,
  }

  deleteTodo = id => {
    const {todoDetailList} = this.state
    const filterTodo = todoDetailList.filter(todo => todo.id !== id)
    this.setState({
      todoDetailList: filterTodo,
    })
  }

  render() {
    const {todoDetailList} = this.state
    return (
      <div className="bg-container">
        <div className="simpleTodo-container">
          <h1 className="main-heading"> Simple Todos </h1>
          <ul className="card-container">
            {todoDetailList.map(eachItem => (
              <TodoItem
                todoDetails={eachItem}
                key={eachItem.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodo
