import Player from '../Player/Player.js';
import styles from './PlayerContainer.module.css';
function PlayerContainer(props) {
	return props.player.lifes.length !== 0 || props.player.place <= 3 ? (
		<div className={props.c_player === props.player && props.player.lifes.length !== 0 ? styles.player_container_on : styles.player_container}>
			<Player left={props.left} player={props.player} />
		</div>
	) : (
		<div className={styles.player_container_off}></div>
	);
}
export default PlayerContainer;
