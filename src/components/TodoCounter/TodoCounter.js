import React from 'react'
import "../TodoCounter/TodoCounter.css"
import { TodoContext } from '../TodoContext';

function TodoCounter() {
	const {
		completedTodos,
		totalTodos
	} = React.useContext(TodoContext)
	return (
		
		totalTodos === completedTodos ?

		<h2 className="title"> Felicidades, completaste todas las tareas crack!!</h2>

		:

		<h2 className="title">
			<span> {completedTodos} </span>
				Tareas completadas de
			<span> {totalTodos} </span>
		</h2>
		
	)
}

export { TodoCounter } ;