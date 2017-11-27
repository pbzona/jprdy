import React from 'react';

const ActionButton = props => {
	return (
		<div>
			<button 
				className="button button--action" 
				onClick={() => props.buttonFunction('New')}
			>
				{props.buttonText}
			</button>
		</div>
	)
};

export default ActionButton;