import Player from '../Player/Player.js';
import styles from './PlayerContainer.module.css';
function PlayerContainer(props) {
	return (
		<div className={props.c_player === props.player && props.player.lifes.length > 0 ? styles.player_container_on : styles.player_container}>
			<Player left={props.left} player={props.player} id={props.id} />
		</div>
	);
}
export default PlayerContainer;
