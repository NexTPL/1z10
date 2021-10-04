import './App.css';
import Player from './components/Player.jsx';
import Timer from './components/Timer.jsx';
import Data from './Data.json';

let Players = Data.players;

function App() {
	return (
		<div className='App'>
			<header></header>
			<div className='players'>
				<Player name={Players.p1.name} lives={Players.p1.lives} score={Players.p1.score}></Player>
				<Player name={Players.p2.name} lives={Players.p2.lives} score={Players.p2.score}></Player>
				<Player name={Players.p3.name} lives={Players.p3.lives} score={Players.p3.score}></Player>
				<Player name={Players.p4.name} lives={Players.p4.lives} score={Players.p4.score}></Player>
				<Player name={Players.p5.name} lives={Players.p5.lives} score={Players.p5.score}></Player>
				<Player name={Players.p6.name} lives={Players.p6.lives} score={Players.p6.score}></Player>
				<Player name={Players.p7.name} lives={Players.p7.lives} score={Players.p7.score}></Player>
				<Player name={Players.p8.name} lives={Players.p8.lives} score={Players.p8.score}></Player>
				<Player name={Players.p9.name} lives={Players.p9.lives} score={Players.p9.score}></Player>
				<Player name={Players.p10.name} lives={Players.p10.lives} score={Players.p10.score}></Player>
			</div>
			<Timer></Timer>
			<footer></footer>
		</div>
	);
}

export default App;
