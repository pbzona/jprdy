import React from 'react';

import AddNewPlayer from './AddNewPlayer';
import DailyDouble from './DailyDouble';
import PlayerScore from './PlayerScore';
import PlayerDisplay from './PlayerDisplay';
import PlayerAction from './PlayerAction';
import ShowAnswer from './ShowAnswer';
import RightAndWrong from './RightAndWrong';

const Player = props => {
  const displayScore =
    props.score >= 0
      ? `$${require('numeral')(props.score).format('0,0')}`
      : `-$${require('numeral')(props.score * -1).format('0,0')}`;

  if (props.needName) {
    return <AddNewPlayer createPlayer={props.createPlayer} />;
  }

  if (props.index + 1 === props.isWagering) {
    return (
      <div className="player__container">
        <PlayerScore score={displayScore} index={props.index} />
        <PlayerAction
          index={props.index}
          score={displayScore}
          inputText="Wager"
          button={false}
          selector="player-wager"
        />
        <RightAndWrong index={props.index} onFunction={props.onWager} />
      </div>
    );
  }

  if (props.round === 3) {
    // Action for the Final Jeopardy wager
    return (
      <div className="player__container">
        <PlayerScore score={displayScore} index={props.index} />
        <PlayerAction
          index={props.index}
          inputText="Wager"
          button={true}
          buttonAction={props.onFinalWager}
          buttonParam={props.index}
          selector={`final-wager-${props.index}`}
        />
      </div>
    );
  }

  if (props.round === 4) {
    // Action for entering your Final Jeopardy answer
    return (
      <div className="player__container">
        <PlayerScore score={displayScore} index={props.index} />
        <PlayerAction
          index={props.index}
          score={displayScore}
          inputText="What is..."
          button={true}
          buttonAction={props.onFinalAnswer}
          buttonParam={props.index}
          selector={`final-answer-${props.index}`}
        />
      </div>
    );
  }

  return (
    <div className="player__container">
      <PlayerScore score={displayScore} index={props.index} />
      <PlayerDisplay player={props.player} index={props.index} />

      {props.round < 3 && (
        <DailyDouble onStartWager={props.onStartWager} index={props.index} />
      )}

      {props.round < 5 && (
        <RightAndWrong index={props.index} onFunction={props.onAnswer} />
      )}

      {props.round === 5 && (
        <div>
          <ShowAnswer
            answer={props.finalData.answers[props.index]}
            index={props.index}
          />
          {(!props.finalData.haveAnswered ||
            !props.finalData.haveAnswered.includes(props.index)) && (
            <RightAndWrong
              index={props.index}
              onFunction={props.onFinalAnswerCheck}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Player;
