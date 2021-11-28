import '../App.css';
import Player from './Player.js';

function PlayerContainer(props) {
	if (props.player.lifes.length !== 0 || props.player.place <= 3) {
		if (props.c_player === props.player && props.player.lifes.length !== 0) {
			return (
				<div className='player_container_on'>
					<Player left={props.left} player={props.player} />
				</div>
			);
		} else {
			return (
				<div className='player_container'>
					<Player left={props.left} player={props.player} />
				</div>
			);
		}
	} else {
		return <div className='player_container_off'></div>;
	}
}
export default PlayerContainer;
