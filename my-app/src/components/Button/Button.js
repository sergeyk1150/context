import styles from '../../App.module.css';
export const Button = ({ handler, children, disabled }) => {
	return (
		<button
			className={styles.btn}
			onClick={handler}
			disabled={disabled}
			type="button"
		>
			{children}
		</button>
	);
};
