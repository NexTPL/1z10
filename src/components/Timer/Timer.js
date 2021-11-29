import styles from './Timer.module.css';

function Timer(props) {
	return (
		<div className={styles.timer}>
			<p>{props.time.toFixed(1)}</p>
		</div>
	);
}
export default Timer;
