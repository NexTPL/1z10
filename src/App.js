import { useState } from 'react';
import './App.css';
import Timer from './components/Timer.js';
import Data from './Data.json';
import intro_sound from './audio/intro.mp3';
import good_sound from './audio/good.mp3';
import bad_sound from './audio/bad.mp3';
import nolifes_sound from './audio/nolifes.mp3';
import bg from './video/bg.mp4';
import PlayerContainer from './components/PlayerContainer';

let Players = Data.players;
let c_player; // current player
let l_players = 10; // number of players
let isTimerRunning = false;
let time = 0; // current time
let timer_id = null; // id of timer
let c_place = 10; // current place to set
let running = false;
let LastGoodAnswer; // player with last good answer
let setTime = 1; // player defined time
const intro = new Audio(intro_sound);
const good = new Audio(good_sound);
const bad = new Audio(bad_sound);
const no_lifes = new Audio(nolifes_sound);
const video = bg;
intro.volume = 0.5;
intro.loop = true;

function App() {
	const [PlayerData, NewPlayerData] = useState(Players);
	window.onkeyup = function (e) {
		if (!running || l_players <= 3) {
			// Players
			if (e.which === 49) c_player = Players[1]; // 1
			if (e.which === 50) c_player = Players[2]; // 2
			if (e.which === 51) c_player = Players[3]; // 3
			if (e.which === 52) c_player = Players[4]; // 4
			if (e.which === 53) c_player = Players[5]; // 5
			if (e.which === 54) c_player = Players[6]; // 6
			if (e.which === 55) c_player = Players[7]; // 7
			if (e.which === 56) c_player = Players[8]; // 8
			if (e.which === 57) c_player = Players[9]; // 9
			if (e.which === 48) c_player = Players[10]; // 10
		}
		// Run
		if (e.which === 17 && e.location === 1 && !isTimerRunning && c_player !== undefined) {
			if (c_player === LastGoodAnswer && l_players > 3) return;
			time = setTime;
			timer_id = setInterval(timer, 1000);
			isTimerRunning = true;
			running = true;

			update();
		}
		// Good Answer
		if (e.which === 32 && isTimerRunning) {
			LastGoodAnswer = c_player;
			clearInterval(timer_id);
			isTimerRunning = false;
			running = false;
			if (l_players <= 3) c_player.score += 10;
			time = 0;
			good.play();
			update();
		}
		// Play intro
		if (e.which === 18 && e.location === 1) intro.play();

		// Input names
		if (e.which === 18 && e.location === 2) InputNames();

		// Set timer
		if (e.which === 17 && e.location === 2) {
			setTime = Number(prompt('Proszę podać czas odpowiedzi'));
		}
		update();
	};

	const InputNames = () => {
		const Names = prompt('Proszę podać imiona dzieląc je ", "');
		if (Names === null) return;
		const splitNames = Names.split(', ');
		for (let i = 1; i <= 10; i++) Players[i].name = splitNames[i - 1];
		update();
	};

	// Timer
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

	// Remove life
	const removeLife = () => {
		c_player.lifes.shift(); // remove life
		if (c_player === LastGoodAnswer) LastGoodAnswer = undefined; // check last good answer and set it to undefined
		if (c_player.lifes.length === 1 && c_player.place === 'none') {
			// check for player deletion
			c_player.place = c_place; // set player's place
			setTimeout(() => {
				no_lifes.play();
				c_player.lifes.shift(); // remove last live
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
			c_player = LastGoodAnswer;
			update();
		}, 1000);
		update();
	};

	// Convert to poitns
	const convertLTP = () => {
		for (let i = 1; i <= 10; i++) {
			if (Players[i].lifes.length !== 0) {
				Players[i].score = Players[i].lifes.length - 1;
				Players[i].lifes = [1, 1, 1, 1];
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
					<PlayerContainer left={l_players} player={PlayerData[1]} c_player={c_player}></PlayerContainer>
					<PlayerContainer left={l_players} player={PlayerData[2]} c_player={c_player}></PlayerContainer>
					<PlayerContainer left={l_players} player={PlayerData[3]} c_player={c_player}></PlayerContainer>
					<PlayerContainer left={l_players} player={PlayerData[4]} c_player={c_player}></PlayerContainer>
					<PlayerContainer left={l_players} player={PlayerData[5]} c_player={c_player}></PlayerContainer>
					<PlayerContainer left={l_players} player={PlayerData[6]} c_player={c_player}></PlayerContainer>
					<PlayerContainer left={l_players} player={PlayerData[7]} c_player={c_player}></PlayerContainer>
					<PlayerContainer left={l_players} player={PlayerData[8]} c_player={c_player}></PlayerContainer>
					<PlayerContainer left={l_players} player={PlayerData[9]} c_player={c_player}></PlayerContainer>
					<PlayerContainer left={l_players} player={PlayerData[10]} c_player={c_player}></PlayerContainer>
				</div>
				<Timer time={time}></Timer>
			</div>
		</div>
	);
}

export default App;
