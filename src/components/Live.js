import '../App.css';

function Live(props) {
	if (props.live === 1) return <div className='live'></div>;
	else return <div className='no-live'></div>;
}
export default Live;
