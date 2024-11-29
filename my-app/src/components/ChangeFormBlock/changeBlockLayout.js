import styles from '../../App.module.css';
import { Button } from '../Button/Button';

export const ChangeBlockLayout = (props) => {
	const {
		changeContent,
		inputChange,
		disabledChange,
		handlerChange,
		handlerRefresh,
		handlerClose,
	} = props;
	return (
		<>
			{changeContent && (
				<div className={styles['change-content']}>
					<label className={styles['change-content__label']}>
						Изменить задачу
					</label>
					<input
						className={styles['change-content__input']}
						onChange={handlerChange}
						value={inputChange}
					></input>
					<Button handler={handlerRefresh} disabled={disabledChange}>
						Отправить
					</Button>
					<Button handler={handlerClose}>Закрыть</Button>
				</div>
			)}
		</>
	);
};
