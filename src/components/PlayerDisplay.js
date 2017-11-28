import React from 'react';

const PlayerDisplay = props => {
	const fonts = [
		'Rock Salt',
		'Homemade Apple',
		'Amatic SC',
		'Shadows Into Light'
	];

	let activeFont = 0;

	return (
		<div
			className={`player__main display-player-name display-player-${
				props.index
			}`}
		>
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
	);
};

export default PlayerDisplay;
