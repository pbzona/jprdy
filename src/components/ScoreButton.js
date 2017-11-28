import React from 'react';

const ScoreButton = ({ onSelectValue, value, buttonKey }) => {
	return (
		<div className="score__container">
			<button
				className={`score__button button-${buttonKey}`}
				onClick={() => onSelectValue(value, buttonKey)}
			>
				${value}
			</button>
		</div>
	);
};

export default ScoreButton;
