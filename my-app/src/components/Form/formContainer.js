import { useState, useContext } from 'react';
import { FormLayout } from './formLayout';
import { onAdd } from '../../handlers/onAdd';
import { onChange } from '../../handlers/onChange';
import { onSearchContent } from '../../handlers/onSearchContent';
import { onSortedContent } from '../../handlers/onSortedContent';
import { AppContext } from '../../context';

export const FormContainer = () => {
	const [input, setInput] = useState('');
	const [disabled, setDisabled] = useState(true);
	const {
		refreshTodos,
		setRefreshTodos,
		sortFlag,
		setSortFlag,
		searchContent,
		setSearchContent,
		setSearchFlag,
	} = useContext(AppContext);

	const handlerAddTodo = () => {
		return onAdd(input, setInput, refreshTodos, setRefreshTodos, setDisabled);
	};
	const handlerSortedContent = () => {
		return onSortedContent(sortFlag, setSortFlag, refreshTodos, setRefreshTodos);
	};
	const handlerSearchContent = (target) => {
		return onSearchContent(
			target,
			setSearchContent,
			refreshTodos,
			setRefreshTodos,
			setSearchFlag,
		);
	};
	const handlerChange = (target) => {
		return onChange(target, setDisabled, setInput);
	};
	const state = {
		input,
		disabled,
		searchContent,
		handlerAddTodo,
		handlerSortedContent,
		handlerSearchContent,
		handlerChange,
	};
	return <FormLayout {...state} />;
};
