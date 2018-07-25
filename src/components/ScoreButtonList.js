import React from 'react';

import ScoreButton from './ScoreButton';

const ScoreButtonList = props => {
  const scoreButtons = props.buttonValues.map((value, idx) => {
    return (
      <ScoreButton
        key={idx}
        buttonKey={idx}
        value={value}
        onSelectValue={props.onSelectValue}
      />
    );
  });

  return (
    <div className="list list--score-buttons">
      <ul>{scoreButtons}</ul>
    </div>
  );
};

export default ScoreButtonList;
