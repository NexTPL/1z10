import '../App.css';
import Live from './Live.js';
import Counter from './Counter.js';

function Player(props) {
	if (props.player.lives.length !== 0 || props.player.place <= 3) {
		if (props.left > 3) {
			return (
				<div className='player'>
					<Live live={props.player.lives[1]}></Live>
					<Live live={props.player.lives[2]}></Live>
					<Live live={props.player.lives[3]}></Live>
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
					<Counter score={props.score}></Counter>
					<Live live={props.player.lives[1]}></Live>
					<Live live={props.player.lives[2]}></Live>
					<Live live={props.player.lives[3]}></Live>
				</div>
			);
		}
	} else {
		return <div></div>;
	}
}
export default Player;
