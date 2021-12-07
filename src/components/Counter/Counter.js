import styles from './Counter.module.css';

function Counter(props) {
	return <div className={props.eliminated === false ? styles.points : styles.points_off}>{props.score}</div>;
}

export default Counter;
