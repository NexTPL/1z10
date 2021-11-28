import '../App.css';
import Life from './Life.js';
import Counter from './Counter.js';

function Player(props) {
	if (props.left > 3) {
		return (
			<div className='player'>
				<Life life={props.player.lifes[3]} />
				<Life life={props.player.lifes[2]} />
				<Life life={props.player.lifes[1]} />
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
				<Counter score={props.player.score} />
				<Life life={props.player.lifes[3]} />
				<Life life={props.player.lifes[2]} />
				<Life life={props.player.lifes[1]} />
			</div>
		);
	}
}
export default Player;
