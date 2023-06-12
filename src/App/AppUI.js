import React from 'react';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodosLoading } from '../components/TodosLoading/index';
import { TodosError } from '../components/TodosError/index';
import { EmptyTodos } from '../components/EmptyTodos/index';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { Modal } from '../Modal';
import { TodoContext } from '../components/TodoContext';

function AppUI() {
	const {
		loading,
		error,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal
	} = React.useContext(TodoContext)
	return (
		<>
			<TodoCounter />
			<TodoSearch 
			/>
	
			<TodoList >
				{loading && (
					<>
						<TodosLoading />
						<TodosLoading/>
						<TodosLoading/>
					</>
				)}
				{error && <TodosError/>}
				{(!loading && searchedTodos.length === 0) && <EmptyTodos />}

				{searchedTodos.map(todo => (
			<TodoItem 
				key={todo.text} 
				text={todo.text}
				completed={todo.completed} 
				onComplete={() => completeTodo(todo.text)}
				onDelete={() => deleteTodo(todo.text)}
				/>
			))}
			</TodoList>
				
	
			<CreateTodoButton
				setOpenModal={setOpenModal}
			/>
			
			{openModal && (
				<Modal>
				La funcionalidad de agregar TODO
				</Modal>
			)}
			
		</>
		);
}

export { AppUI }