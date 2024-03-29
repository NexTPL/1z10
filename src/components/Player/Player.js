import styles from './Player.module.css';
import Life from '../Life/Life.js';
import Counter from '../Counter/Counter.js';

function Player(props) {
	return props.left > 3 ? (
		<div className={styles.player}>
			<Life life={props.player.lifes[2]} />
			<Life life={props.player.lifes[1]} />
			<Life life={props.player.lifes[0]} />
			<div className={props.player.eliminated === false ? styles.info : styles.info_off}>
				<p className={styles.name}>{props.player.name}</p>
				<p className={styles.nr}>{props.id}</p>
			</div>
		</div>
	) : (
		<div className={styles.player}>
			<div className={props.player.eliminated === false ? styles.info : styles.info_off}>
				<p className={styles.name}>{props.player.name}</p>
			</div>
			<Counter eliminated={props.player.eliminated} score={props.player.score} />
			<Life life={props.player.lifes[2]} />
			<Life life={props.player.lifes[1]} />
			<Life life={props.player.lifes[0]} />
		</div>
	);
}
export default Player;
