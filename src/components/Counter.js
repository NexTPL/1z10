import '../App.css';

function Counter(props) {
	return (
		<div className='points'>
			<p>{props.score}</p>
		</div>
	);
}
export default Counter;
