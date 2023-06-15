import React from 'react'
import "../TodoCounter/TodoCounter.css"
import { TodoContext } from '../TodoContext';
import confetti from "canvas-confetti";

function TodoCounter() {
	const {
		completedTodos,
		totalTodos,
		searchedTodos
	} = React.useContext(TodoContext)
	return (
		
		totalTodos === completedTodos &&  searchedTodos.length >= 1 ?
		
		<h2 className="title"> Congratulations, you have completed all the tasks crack!!</h2>

		:

		<h2 className="title">
			<span> {completedTodos} </span>
				Task completed of
			<span> {totalTodos} </span>
		</h2>
		
	)
}

export { TodoCounter } ;