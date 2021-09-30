import '../App.css';
import Counter from './Counter';

function Player() {
	return (
		<div className='player_container'>
			<div className='player'>
				<div className='info'>
					<p>##</p>
					
				</div>
			</div>
			<Counter></Counter>
		</div>
	);
}
export default Player;
