import { useState } from 'react';
import './App.css';
import Player from './components/Player.js';
import Timer from './components/Timer.js';
import Data from './Data.json';

let Players = Data.players;

function 1z10() {
	const [PlayerData, NewPlayerData] = useState(Players);
	function RemoveLife() {
		Players = Players.p1.lives.shift();
		NewPlayerData(Players);
	}
	return (
		<div className='App'>
			<header></header>
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
			<Timer></Timer>
			<button onClick={RemoveLife}>Click Me</button>
			<footer></footer>
		</div>
	);
}
