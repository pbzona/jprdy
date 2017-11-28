import React from 'react';

import AddNewPlayer from './AddNewPlayer';
import DailyDouble from './DailyDouble';
import Wager from './Wager';
import FinalWager from './FinalWager';
import FinalAnswer from './FinalAnswer';
import PlayerScore from './PlayerScore';
import ShowAnswer from './ShowAnswer';
import RightAndWrong from './RightAndWrong';

const Player = props => {
	const fonts = [
		'Rock Salt',
		'Homemade Apple',
		'Amatic SC',
		'Shadows Into Light'
	];

	let activeFont = 0;

	const displayScore =
		props.score >= 0
			? `$${require('numeral')(props.score).format('0,0')}`
			: `-$${require('numeral')(props.score * -1).format('0,0')}`;

	if (props.needName) {
		return <AddNewPlayer createPlayer={props.createPlayer} />;
	}

	if (props.index + 1 === props.isWagering) {
		return (
			<Wager
				onWager={props.onWager}
				index={props.index}
				score={displayScore}
				onAnswer={props.onAnswer}
			/>
		);
	}

	if (props.round === 3) {
		return (
			<FinalWager
				index={props.index}
				score={displayScore}
				onFinalWager={props.onFinalWager}
			/>
		);
	}

	if (props.round === 4) {
		return (
			<FinalAnswer
				index={props.index}
				score={displayScore}
				onFinalAnswer={props.onFinalAnswer}
			/>
		);
	}

	return (
		<div className="player-container">
			<PlayerScore score={displayScore} index={props.index} />
			<div className={`display-player-name display-player-${props.index}`}>
				<h2
					onClick={() => {
						activeFont = activeFont < 3 ? activeFont + 1 : 0;
						document.querySelector(
							`.display-player-${props.index}`
						).style.fontFamily = `${fonts[activeFont]}, cursive`;
					}}
				>
					{props.player}
				</h2>
			</div>

			{props.round < 3 && (
				<DailyDouble onStartWager={props.onStartWager} index={props.index} />
			)}

			{props.round < 5 && (
				<RightAndWrong index={props.index} onFunction={props.onAnswer} />
			)}

			{props.round === 5 && (
				<ShowAnswer
					answer={props.finalData.answers[props.index]}
					index={props.index}
				/>
			)}

			{props.round === 5 && (
				<RightAndWrong
					index={props.index}
					onFunction={props.onFinalAnswerCheck}
				/>
			)}
		</div>
	);
};

export default Player;
