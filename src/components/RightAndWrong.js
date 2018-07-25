import React from 'react';

const RightAndWrong = props => {
  return (
    <div>
      <button
        className="button button__answer button__answer--right"
        onClick={() => props.onFunction(props.index, true)}
      >
        &#x2713;
      </button>
      <button
        className="button button__answer button__answer--wrong"
        onClick={() => props.onFunction(props.index, false)}
      >
        &#x2717;
      </button>
    </div>
  );
};

export default RightAndWrong;
