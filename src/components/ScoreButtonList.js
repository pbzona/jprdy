import React from 'react';

import ScoreButton from './ScoreButton';

const ScoreButtonList = props => {
	const scoreButtons = props.buttonValues.map((value, idx) => {
		return (
			<ScoreButton
				key={idx}
				buttonKey={idx}
				value={value}
				onSelectValue={props.onSelectValue}
			/>
		);
	});

	return (
		<div className="score-button-list-container">
			<ul>{scoreButtons}</ul>
		</div>
	);
};

export default ScoreButtonList;
