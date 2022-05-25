import React, {useState} from 'react'
import './App.css'
import TodoField from './components/TodoField';
import Todos from './components/Todos';

function App() {

  const [todos,setTodos] = useState([
    {
      id: 1,
      name: "GYM",
      status: false,
    },
    {
      id: 2,
      name: "Reading",
      status: true,
    },
  ]);

  const addTodo = (todo) => {
    if(todo.name) {
      setTodos([...todos, todo])
    }
  }

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const doneTodo = (id) => {
    let currentTodo = todos.find((todo) => todo.id === id)
    currentTodo.status = true
    setTodos([...todos])
  }

  return (
    <div className='app'>
      <h1>ToDos</h1>
      <TodoField addTodo = { addTodo } />
      <Todos todos = { todos } deleteTodo = { deleteTodo } doneTodo = { doneTodo } />
    </div>
  )
}

export default App;