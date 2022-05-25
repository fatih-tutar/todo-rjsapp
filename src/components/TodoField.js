import React, {useState} from 'react'
import {v4 as uuidv4} from "uuid"

const TodoField = ({ addTodo }) => {

  const [value, setValue] = useState("")

  return (
    <div className='todoField'>
        <input type="text" className='todoField__input' value = {value} onChange={(e) => setValue(e.target.value)}/>
        <button className='todoField__btn' onClick={() => addTodo({
          id:uuidv4(),
          name: value,
          status: false
        })}>Add</button>    
    </div>
  )
}

export default TodoField