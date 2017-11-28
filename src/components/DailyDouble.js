import React from 'react';

const DailyDouble = props => (
	<div>
		<button
			className="answer-button daily-double"
			onClick={() => props.onStartWager(props.index + 1)}
		>
			Daily Double
		</button>
	</div>
);

export default DailyDouble;
