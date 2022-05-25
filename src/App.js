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

  return (
    <div className='app'>
      <h1>ToDos</h1>
      <TodoField addTodo = { addTodo } />
      <Todos todos = { todos } />
    </div>
  )
}

export default App;