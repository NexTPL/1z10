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
let l_players = 10;
let TempData = Data;
let c_player = undefined;
let time = 0;

const intro = new Audio(intro_sound);
const good = new Audio(good_sound);
const bad = new Audio(bad_sound);
const no_lifes = new Audio(nolifes_sound);
const video = bg;

function App() {
	const [Data, setData] = useState(TempData);

	window.onkeyup = function (e) {
		// Players
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

		// Input names
		if (e.which === 18 && e.location === 2) InputNames();

		Update();
	};

	const InputNames = () => {
		const Names = prompt('Proszę podać imiona dzieląc je " "');
		if (Names === null) return;
		const splitNames = Names.split(' ');
		for (let i = 0; i < 10; i++) TempData[i].name = splitNames[i];
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

				<Timer time={time} />
			</div>
		</div>
	);
}

export default App;
