import '../App.css';
import Live from './Live.js';
import Counter from './Counter.js';

function Player(props) {
	if (props.lives.length !== 0 || props.place <= 3) {
		return (
			<div className='player_container'>
				<div className='player'>
					<div className='info'>
						<p>{props.name}</p>
					</div>
					<Counter score={props.score} left={props.left}></Counter>
					<Live live={props.lives[1]}></Live>
					<Live live={props.lives[2]}></Live>
					<Live live={props.lives[3]}></Live>
				</div>
			</div>
		);
	} else {
		return <div className='player_container_off'></div>;
	}
}
export default Player;
