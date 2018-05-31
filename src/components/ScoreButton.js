import React from 'react';

const ScoreButton = ({ onSelectValue, value, buttonKey }) => {
	return (
		<li className="score__container">
			<button
				className={`score__button button-${buttonKey}`}
				onClick={() => onSelectValue(value, buttonKey)}
			>
				${value}
			</button>
		</li>
	);
};

export default ScoreButton;
