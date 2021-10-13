import '../App.css';
import Counter from './Counter.js';
import Live from './Live.js';

function Player(props) {
	return (
		<div className='player_container'>
			<div className='player'>
				<div className='info'>
					<p>{props.name}</p>
				</div>
				<Live live={props.lives[0]}></Live>
				<Live live={props.lives[1]}></Live>
				<Live live={props.lives[2]}></Live>
			</div>
			<Counter score={props.score}></Counter>
		</div>
	);
}
export default Player;
