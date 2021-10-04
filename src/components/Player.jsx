import '../App.css';
import Counter from './Counter.jsx';
import Live from './Live.jsx';

function Player(props) {
	return (
		<div className='player_container'>
			<div className='player'>
				<div className='info'>
					<p>{props.name}</p>
				</div>
				<Live></Live>
				<Live></Live>
				<Live></Live>
			</div>
			<Counter score={props.score}></Counter>
		</div>
	);
}
export default Player;
