import React from 'react';

const AddNewPlayer = ({ createPlayer }) => {
	return (
		<div className="player__container">
			<input className="player__input-name" placeholder="Name" />
			<button className="player__submit-name" onClick={createPlayer}>
				Add
			</button>
		</div>
	);
};

export default AddNewPlayer;
