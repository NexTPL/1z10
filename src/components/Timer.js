import '../App.css';

function Timer(props) {
	return (
		<div className='timer'>
			<p>{props.time}</p>
		</div>
	);
}
export default Timer;
