import React from 'react';

const RoundChange = props => {
  if (props.shouldDisplay) {
    return (
      <div className="round-change-container">
        <button className="round-change-button" onClick={props.onRoundChange}>
          {props.round < 2 ? 'Double Jeopardy' : 'Final Jeopardy'}
        </button>
      </div>
    );
  }
  return <div />;
};

export default RoundChange;
