import React from 'react';

const AddNewPlayer = ({ createPlayer }) => {
  return (
    <form className="player__container">
      <input autoFocus className="player__input-name" placeholder="Name" />
      <button className="player player__submit-name" onClick={createPlayer}>
        Add
      </button>
    </form>
  );
};

export default AddNewPlayer;
