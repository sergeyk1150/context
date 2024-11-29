import { useState, useContext } from 'react';
import { onClose } from '../../handlers/onClose';
import { onChange } from '../../handlers/onChange';
import { onRefresh } from '../../handlers/onRefresh';
import { ChangeBlockLayout } from './changeBlockLayout';
import { AppContext } from '../../context';

export const ChangeBlockContainer = () => {
	const [inputChange, setInputChange] = useState('');
	const [disabledChange, setDisabledChange] = useState(true);
	const { changeContent, setChangeContent, refreshTodos, setRefreshTodos, id } =
		useContext(AppContext);

	const handlerChange = (target) => {
		return onChange(target, setDisabledChange, setInputChange);
	};
	const handlerRefresh = () => {
		return onRefresh(
			inputChange,
			id,
			setChangeContent,
			setInputChange,
			refreshTodos,
			setRefreshTodos,
			setDisabledChange,
		);
	};
	const handlerClose = () => {
		return onClose(setChangeContent, setInputChange);
	};

	const state = {
		changeContent,
		inputChange,
		disabledChange,
		handlerChange,
		handlerRefresh,
		handlerClose,
	};

	return <ChangeBlockLayout {...state} />;
};
