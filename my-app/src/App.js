import { useState } from 'react';
import { AppContext } from './context';
import { useRequestAllTodos } from './hooks/use-request-all-todos';
import { FormContainer } from './components/Form/formContainer';
import { TodosContainer } from './components/Todos/todosContainer';
import { ChangeBlockContainer } from './components/ChangeFormBlock/changeBlockContainer';
import styles from './App.module.css';

export const App = () => {
	const [refreshTodos, setRefreshTodos] = useState(false);
	const [id, setId] = useState();
	const state = useRequestAllTodos(refreshTodos);
	const appState = {
		...state,
		refreshTodos,
		setRefreshTodos,
		id,
		setId,
	};

	return (
		<AppContext.Provider value={appState}>
			<div className={styles.app}>
				<h1>Todo list</h1>
				<FormContainer />
				<TodosContainer />
				<ChangeBlockContainer />
			</div>
		</AppContext.Provider>
	);
};
