import './App.css';
import Player from './components/Player.jsx';
import Timer from './components/Timer.jsx';

function App() {
	return (
		<div className='App'>
			<header></header>
			<div className='players'>
				<Player></Player>
				<Player></Player>
				<Player></Player>
				<Player></Player>
				<Player></Player>
				<Player></Player>
				<Player></Player>
				<Player></Player>
				<Player></Player>
				<Player></Player>
			</div>
			<Timer></Timer>
			<footer></footer>
		</div>
	);
}

export default App;
