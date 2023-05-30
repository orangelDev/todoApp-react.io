import React from 'react'
import "../CreateTodoButton/CreateTodoButton.css"

function CreateTodoButton() {
  return (
    <div className="createTodo-container">
     <button 
     onClick={(event) => {
      console.log('le diste click, crack')
      console.log(event)
      console.log(event.target)
     }}>+</button>
    </div>
  )
}

export { CreateTodoButton }; 