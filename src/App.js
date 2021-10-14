import { useState } from 'react';
import './App.css';
import Player from './components/Player.js';
import Timer from './components/Timer.js';
import Data from './Data.json';
import intro_sound from './audio/intro.mp3';
import good_sound from './audio/good.mp3';
import bad_sound from './audio/bad.mp3';
import nolives_sound from './audio/nolives.mp3';
import bg from './video/bg.mp4';

let Players = Data.players;
let c_player;
let l_players = 10;
let isTimerRunning = false;
let time = 0;
let timer_id = null;
let c_place = 10;
let running = false;
const intro = new Audio(intro_sound);
const good = new Audio(good_sound);
const bad = new Audio(bad_sound);
const no_lives = new Audio(nolives_sound);
const video = bg;
intro.volume = 0.5;
intro.loop = true;

function App() {
	const [PlayerData, NewPlayerData] = useState(Players);
	window.onkeyup = function (e) {
		// Players
		if (e.which === 49 && !running) c_player = Players.p1;
		if (e.which === 50 && !running) c_player = Players.p2;
		if (e.which === 51 && !running) c_player = Players.p3;
		if (e.which === 52 && !running) c_player = Players.p4;
		if (e.which === 53 && !running) c_player = Players.p5;
		if (e.which === 54 && !running) c_player = Players.p6;
		if (e.which === 55 && !running) c_player = Players.p7;
		if (e.which === 56 && !running) c_player = Players.p8;
		if (e.which === 57 && !running) c_player = Players.p9;
		if (e.which === 48 && !running) c_player = Players.p10;
		// Run
		if (e.which === 17 && !isTimerRunning) {
			time = 10;
			timer_id = setInterval(timer, 1000);
			isTimerRunning = true;
			running = true;

			update();
		}
		if (e.which === 32 && isTimerRunning) {
			clearInterval(timer_id);
			isTimerRunning = false;
			running = false;
			if (l_players <= 3) c_player.score += 10;
			time = 0;
			good.play();
			update();
		}
		if (e.which === 18) intro.play();
	};

	const timer = () => {
		time--;
		update();
		if (time === 0) {
			isTimerRunning = false;
			clearInterval(timer_id);
			removeLife();
			bad.play();
		}
	};

	const removeLife = () => {
		c_player.lives.shift();
		if (c_player.lives.length === 1 && c_player.place === 'none') {
			c_player.place = c_place;
			setTimeout(() => {
				no_lives.play();
				c_player.lives.shift();
				if (c_place === 4) {
					convertLTP();
				}
				c_place--;
				l_players--;
				update();
			}, 1000);
		}
		setTimeout(() => {
			running = false;
		}, 1000);
		update();
	};

	const convertLTP = () => {
		let l_player;
		for (let i = 1; i <= 10; i++) {
			switch (i) {
				case 1:
					l_player = Players.p1;
					break;
				case 2:
					l_player = Players.p2;
					break;
				case 3:
					l_player = Players.p3;
					break;
				case 4:
					l_player = Players.p4;
					break;
				case 5:
					l_player = Players.p5;
					break;
				case 6:
					l_player = Players.p6;
					break;
				case 7:
					l_player = Players.p7;
					break;
				case 8:
					l_player = Players.p8;
					break;
				case 9:
					l_player = Players.p9;
					break;
				case 10:
					l_player = Players.p10;
					break;

				default:
					break;
			}
			if (l_player.lives.length !== 0) {
				l_player.score = (l_player.lives.length - 1) * 10;
				l_player.lives = [1, 1, 1, 1];
			}
		}
	};

	const update = () => {
		NewPlayerData({ ...Players });
	};

	return (
		<div>
			<video src={video} autoPlay loop muted className='video'></video>
			<div className='App'>
				<div className='players'>
					<Player name={PlayerData.p1.name} score={PlayerData.p1.score} lives={PlayerData.p1.lives} left={l_players} place={PlayerData.p1.place}></Player>
					<Player name={PlayerData.p2.name} score={PlayerData.p2.score} lives={PlayerData.p2.lives} left={l_players} place={PlayerData.p2.place}></Player>
					<Player name={PlayerData.p3.name} score={PlayerData.p3.score} lives={PlayerData.p3.lives} left={l_players} place={PlayerData.p3.place}></Player>
					<Player name={PlayerData.p4.name} score={PlayerData.p4.score} lives={PlayerData.p4.lives} left={l_players} place={PlayerData.p4.place}></Player>
					<Player name={PlayerData.p5.name} score={PlayerData.p5.score} lives={PlayerData.p5.lives} left={l_players} place={PlayerData.p5.place}></Player>
					<Player name={PlayerData.p6.name} score={PlayerData.p6.score} lives={PlayerData.p6.lives} left={l_players} place={PlayerData.p6.place}></Player>
					<Player name={PlayerData.p7.name} score={PlayerData.p7.score} lives={PlayerData.p7.lives} left={l_players} place={PlayerData.p7.place}></Player>
					<Player name={PlayerData.p8.name} score={PlayerData.p8.score} lives={PlayerData.p8.lives} left={l_players} place={PlayerData.p8.place}></Player>
					<Player name={PlayerData.p9.name} score={PlayerData.p9.score} lives={PlayerData.p9.lives} left={l_players} place={PlayerData.p9.place}></Player>
					<Player name={PlayerData.p10.name} score={PlayerData.p10.score} lives={PlayerData.p10.lives} left={l_players} place={PlayerData.p10.place}></Player>
				</div>
				<Timer time={time}></Timer>
			</div>
		</div>
	);
}

export default App;
