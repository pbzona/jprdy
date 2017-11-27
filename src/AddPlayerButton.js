import React from 'react';

const AddPlayerButton = props => {
	if (props.shouldDisplay) {
		return (
			<div>
				<button className="add-player-button" onClick={props.handleClick}>
					Add New Player
				</button>
			</div>
		);
	}
	return <div />;
};

export default AddPlayerButton;
