import styles from './Life.module.css';

function Life(props) {
	return <div className={props.life === 1 ? styles.life : styles.no_life}></div>;
}
export default Life;
