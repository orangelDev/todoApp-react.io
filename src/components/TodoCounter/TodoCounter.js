import React from 'react'
import "../TodoCounter/TodoCounter.css"

function TodoCounter({total, completed}) {
	return (
		
			total == completed ?

			<h2 className="title"> Felicidades, completaste todas las tareas crack!!</h2>

			:

			<h2 className="title">
				<span> {completed} </span>
          Tareas completadas de
        <span> {total} </span>
			</h2>
		
	)
}

export { TodoCounter } ;