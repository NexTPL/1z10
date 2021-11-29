import styles from './Counter.module.css';

function Counter(props) {
	return <div className={styles.points}>{props.score}</div>;
}

export default Counter;
