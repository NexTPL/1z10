import { useState } from 'react';
import './App.css';
import Player from './components/Player.js';
import Timer from './components/Timer.js';
import Data from './Data.json';

let Players = Data.players;
let c_player;
let l_players = 10;
let isTimerRunning = false;
let time = 0;
let timer_id = null;

function App() {
	const [PlayerData, NewPlayerData] = useState(Players);

	window.onkeyup = function (e) {
		// Players
		if (e.which === 49) c_player = Players.p1;
		if (e.which === 50) c_player = Players.p2;
		if (e.which === 51) c_player = Players.p3;
		if (e.which === 52) c_player = Players.p4;
		if (e.which === 53) c_player = Players.p5;
		if (e.which === 54) c_player = Players.p6;
		if (e.which === 55) c_player = Players.p7;
		if (e.which === 56) c_player = Players.p8;
		if (e.which === 57) c_player = Players.p9;
		if (e.which === 58) c_player = Players.p10;
		// Run
		if (e.which === 17 && !isTimerRunning) {
			time = 10;
			timer_id = setInterval(timer, 1000);
			isTimerRunning = true;
			update();
		}
		if (e.which === 32 && isTimerRunning) {
			clearInterval(timer_id);
			isTimerRunning = false;
			if (l_players <= 3) c_player.score += 10;
			time = 0;
			update();
		}
	};

	const timer = () => {
		time--;
		update();
		if (time === 0) {
			isTimerRunning = false;
			clearInterval(timer_id);
			removeLife();
		}
	};

	const removeLife = () => {
		c_player.lives.shift();
		if (c_player.lives.length === 0) l_players--;
		update();
	};

	const update = () => {
		NewPlayerData({ ...Players });
	};

	return (
		<div className='App'>
			<div className='players'>
				<Player name={PlayerData.p1.name} score={PlayerData.p1.score} lives={PlayerData.p1.lives}></Player>
				<Player name={PlayerData.p2.name} score={PlayerData.p2.score} lives={PlayerData.p2.lives}></Player>
				<Player name={PlayerData.p3.name} score={PlayerData.p3.score} lives={PlayerData.p3.lives}></Player>
				<Player name={PlayerData.p4.name} score={PlayerData.p4.score} lives={PlayerData.p4.lives}></Player>
				<Player name={PlayerData.p5.name} score={PlayerData.p5.score} lives={PlayerData.p5.lives}></Player>
				<Player name={PlayerData.p6.name} score={PlayerData.p6.score} lives={PlayerData.p6.lives}></Player>
				<Player name={PlayerData.p7.name} score={PlayerData.p7.score} lives={PlayerData.p7.lives}></Player>
				<Player name={PlayerData.p8.name} score={PlayerData.p8.score} lives={PlayerData.p8.lives}></Player>
				<Player name={PlayerData.p9.name} score={PlayerData.p9.score} lives={PlayerData.p9.lives}></Player>
				<Player name={PlayerData.p10.name} score={PlayerData.p10.score} lives={PlayerData.p10.lives}></Player>
			</div>
			<Timer time={time}></Timer>
		</div>
	);
}

export default App;
