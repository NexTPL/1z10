import '../App.css';

function Counter(props) {
	if (props.left <= 3) {
		return <div className='points'>{props.score}</div>;
	} else {
		return <div></div>;
	}
}

export default Counter;
