import { useState } from 'react';
import './App.css';
import Timer from './components/Timer/Timer.js';
import PlayerContainer from './components/PlayerContainer/PlayerContainer';
import intro_sound from './audio/intro.mp3';
import good_sound from './audio/good.mp3';
import bad_sound from './audio/bad.mp3';
import nolifes_sound from './audio/nolifes.mp3';
import bg from './video/bg.mp4';
import Data from './Data';

let l_players = 4;
let TempData = Data;
let c_player = undefined;
let DisplayTime = 0;
let setTime = 1;
let timer_interval;
let running = false;
let LastGoodAnswer = undefined;
let m30points = false;
let introPlayed = false;

const intro = new Audio(intro_sound);
const good = new Audio(good_sound);
const bad = new Audio(bad_sound);
const no_lifes = new Audio(nolifes_sound);
const video = bg;

function App() {
	const [Data, setData] = useState(TempData);

	window.onkeyup = function (e) {
		// Players
		if (!running || l_players <= 3) {
			if (e.which === 49) c_player = TempData[0]; // 1
			if (e.which === 50) c_player = TempData[1]; // 2
			if (e.which === 51) c_player = TempData[2]; // 3
			if (e.which === 52) c_player = TempData[3]; // 4
			if (e.which === 53) c_player = TempData[4]; // 5
			if (e.which === 54) c_player = TempData[5]; // 6
			if (e.which === 55) c_player = TempData[6]; // 7
			if (e.which === 56) c_player = TempData[7]; // 8
			if (e.which === 57) c_player = TempData[8]; // 9
			if (e.which === 48) c_player = TempData[9]; // 10
		}

		// Run
		if (e.which === 17 && e.location === 1) {
			if (!running) {
				if (c_player === LastGoodAnswer && l_players > 3) return;
				DisplayTime = setTime;
				timer_interval = setInterval(timer, 100);
				running = true;
			} else {
				DisplayTime = 0;
			}

			Update();
		}
		// Good Answer
		if (e.which === 32 && running && c_player !== undefined) {
			clearInterval(timer_interval);
			running = false;
			if (l_players <= 3) {
				c_player.score += 10;
				if (m30points) {
					LastGoodAnswer = c_player;
				} else {
					if (c_player.score >= 30) {
						m30points = true;
						LastGoodAnswer = c_player;
					} else {
						c_player = LastGoodAnswer;
					}
				}
			} else {
				LastGoodAnswer = c_player;
			}
			DisplayTime = 0;
			good.play();
			Update();
		}

		if (e.which === 18 && e.location === 1 && introPlayed === false) {
			intro.play();
			introPlayed = true;
		}
		if (e.which === 18 && e.location === 2) InputNames();
		if (e.which === 17 && e.location === 2) SetTimer();
		Update();
	};

	const InputNames = () => {
		const Names = prompt('Proszę podać imiona dzieląc je " "');
		if (Names === null) return;
		const splitNames = Names.split(' ');
		for (let i = 0; i < 10; i++) TempData[i].name = splitNames[i];
		Update();
	};

	const SetTimer = () => {
		const timer_prompt = prompt('Proszę podać czas odpowiedzi');
		const timer_reg = /^[0-9]*(\.[0-9]*)?$/;
		timer_reg.test(timer_prompt) ? (setTime = Number(timer_prompt)) : alert('To fajna liczba...');
		return;
	};

	// Remove life
	const RemoveLife = () => {
		bad.play();
		if (c_player === undefined || c_player.lifes.length === 0) return;
		if (c_player === LastGoodAnswer) LastGoodAnswer = undefined; // check last good answer and set it to undefined
		c_player.lifes.shift();
		if (c_player.lifes.length === 0) {
			setTimeout(() => {
				if (l_players === 4) ChangeRound();
				l_players--;
				no_lifes.play();
				c_player.eliminated = true;
				Update();
			}, 1000);
		}
		Update();
	};

	const ChangeRound = () => {
		for (let i = 9; i >= 0; i--) {
			if (TempData[i].lifes.length === 0) {
				TempData.splice(i, 1);
			} else {
				TempData[i].score = TempData[i].lifes.length;
				TempData[i].lifes = [1, 1, 1];
			}
		}
		setTimeout(() => {
			c_player = undefined;
			LastGoodAnswer = undefined;
		}, 1000);
	};

	// Timer
	const timer = () => {
		DisplayTime -= 0.1;
		if (DisplayTime <= 0) {
			DisplayTime = 0;
			clearInterval(timer_interval);
			running = false;
			RemoveLife();
			setTimeout(() => {
				c_player = LastGoodAnswer;
				Update();
			}, 1000);
		}
		Update();
	};

	const Update = () => {
		setData([...TempData]);
	};

	return (
		<div>
			<video src={video} autoPlay loop muted className='video'></video>
			<div className='App'>
				<div className='players'>
					{Data.map((ID) => (
						<PlayerContainer left={l_players} player={ID} c_player={c_player} key={Data.indexOf(ID)} id={Data.indexOf(ID) + 1} />
					))}
				</div>

				<Timer time={DisplayTime} />
			</div>
		</div>
	);
}

export default App;
