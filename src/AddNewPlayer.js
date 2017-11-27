import React from 'react';

const AddNewPlayer = ({createPlayer}) => {
	return (
		<div className="player-container">
			<input className="add-new-player" placeholder="Name" />
			<button className="add-player-submit" onClick={createPlayer}>
				Add
			</button>
		</div>
	);
}

export default AddNewPlayer;