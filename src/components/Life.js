import '../App.css';

function Life(props) {
	if (props.life === 1) return <div className='life'></div>;
	else return <div className='no-life'></div>;
}
export default Life;
