import '../App.css';
import Live from './Live.js';
import Counter from './Counter.js';

function Player(props) {
	if (props.left > 3) {
		return (
			<div className='player'>
				<Live live={props.player.lives[3]}></Live>
				<Live live={props.player.lives[2]}></Live>
				<Live live={props.player.lives[1]}></Live>
				<div className='info'>
					<p className='name'>{props.player.name}</p>
					<p className='nr'>{props.player.nr}</p>
				</div>
			</div>
		);
	} else {
		return (
			<div className='player'>
				<div className='info'>
					<p className='nr'>{props.player.nr}</p>
					<p className='name'>{props.player.name}</p>
				</div>
				<Counter score={props.player.score}></Counter>
				<Live live={props.player.lives[3]}></Live>
				<Live live={props.player.lives[2]}></Live>
				<Live live={props.player.lives[1]}></Live>
			</div>
		);
	}
}
export default Player;
