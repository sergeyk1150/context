import { useContext } from 'react';
import { TodosLayout } from './todosLayout';
import { onDelete } from '../../handlers/onDelete';
import { onChangeContent } from '../../handlers/onChangeContent';
import { AppContext } from '../../context';

export const TodosContainer = () => {
	const {
		setTodos,
		refreshTodos,
		setRefreshTodos,
		setChangeContent,
		setId,
		isLoading,
		todos,
	} = useContext(AppContext);
	const handlerDelete = (id) => {
		return onDelete(id, setTodos, refreshTodos, setRefreshTodos);
	};
	const handlerChangeContent = (id) => {
		return onChangeContent(
			id,
			setChangeContent,
			setId,
			refreshTodos,
			setRefreshTodos,
		);
	};
	const state = {
		isLoading,
		todos,
		handlerDelete,
		handlerChangeContent,
	};

	return <TodosLayout {...state} />;
};
