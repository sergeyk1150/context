import styles from '../../App.module.css';
import { Button } from '../Button/Button';
export const TodosLayout = (props) => {
	const { isLoading, todos, handlerDelete, handlerChangeContent } = props;
	return (
		<div className={styles.todo}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<ul className={styles['todo__list']}>
					{todos.map(({ id, title }) => (
						<li className={styles['todo__list-item']} key={id}>
							{title}
							<Button
								handler={() => {
									handlerDelete(id);
								}}
							>
								Удалить
							</Button>
							<Button
								handler={() => {
									handlerChangeContent(id);
								}}
							>
								Изменить
							</Button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
