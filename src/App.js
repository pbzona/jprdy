import React, { Component } from 'react';
import Store from 'store';

import Header from './components/Header';
import ScoreButtonList from './components/ScoreButtonList';
import PlayerList from './components/PlayerList';
import ActionList from './components/ActionList';
import Footer from './components/Footer';

const initState = {
  buttonValues: [200, 400, 600, 800, 1000],
  activeValue: 0,
  players: [],
  addingPlayer: false,
  round: 1,
  playerScores: [],
  isWagering: 0,
  final: {
    wagers: {},
    answers: {},
    haveAnswered: []
  },
  isFinalWager: false,
  isFinalAnswer: false,
  gameInProgress: false
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initState;

    this.handleScores = this.handleScores.bind(this);
    this.onClearScores = this.onClearScores.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onSelectValue = this.onSelectValue.bind(this);
    this.onAddPlayer = this.onAddPlayer.bind(this);
    this.onAnswer = this.onAnswer.bind(this);
    this.onToggleRound = this.onToggleRound.bind(this);
    this.onGoToFinalRound = this.onGoToFinalRound.bind(this);
    this.onCreatePlayer = this.onCreatePlayer.bind(this);
    this.onWager = this.onWager.bind(this);
    this.onStartWager = this.onStartWager.bind(this);
    this.onFinalWager = this.onFinalWager.bind(this);
    this.onLockFinalWagers = this.onLockFinalWagers.bind(this);
    this.onFinalAnswer = this.onFinalAnswer.bind(this);
    this.onLockFinalAnswers = this.onLockFinalAnswers.bind(this);
    this.onFinalAnswerCheck = this.onFinalAnswerCheck.bind(this);
  }

  // Load from local storage if present
  componentWillMount() {
    const appState = Store.get('appState');
    if (appState) {
      this.setState(() => {
        return {
          ...appState
        };
      });
      this.handleScores();
    }
  }

  // Save state to local storage on creation
  componentDidMount() {
    Store.set('appState', this.state);
    this.handleScores();
  }

  // Save state to local storage on update
  componentDidUpdate() {
    Store.set('appState', this.state);
    this.handleScores();
  }

  // Clears scores, but does not reset player information
  // i.e. you finish a game and want to play again with the same players
  onClearScores() {
    const playerScores = Object.keys(this.state.playerScores);
    playerScores.forEach((score, playerKey) => {
      this.setState(() => {
        return {
          playerScores: {
            ...playerScores,
            [playerKey]: 0
          },
          // Set progress to false so that you can add more players if needed
          gameInProgress: false
        };
      });
    });
  }

  // Reset state
  onReset() {
    this.setState(() => {
      return {
        ...initState
      };
    });

    var allScoreButtons = document.querySelectorAll('.score__button');
    allScoreButtons.forEach(button => {
      button.classList.remove('score__button--active');
    });
  }

  // Sets the active value when a score button is clicked
  onSelectValue(value, key) {
    this.setState(() => {
      return {
        activeValue: value
      };
    });

    var allScoreButtons = document.querySelectorAll('.score__button');
    var newActiveButton = document.querySelector(`.button-${key}`);

    allScoreButtons.forEach(button => {
      button.classList.remove('score__button--active');
    });

    newActiveButton.classList.add('score__button--active');
  }

  // Intermediate state when adding a new player
  onAddPlayer(newPlayer) {
    this.setState(() => {
      return {
        players: this.state.players.concat(newPlayer),
        addingPlayer: true
      };
    });
  }

  // Score update handlers - need to get the key prop from players
  onAnswer(playerKey, isCorrect) {
    const newScore = isCorrect
      ? this.state.playerScores[playerKey] + this.state.activeValue
      : this.state.playerScores[playerKey] - this.state.activeValue;
    const otherScores = this.state.playerScores;

    this.setState(() => {
      return {
        gameInProgress: true,
        playerScores: {
          ...otherScores,
          [playerKey]: newScore
        }
      };
    });
  }

  // Following 2 methods handle round changes in a way that allows user to move between first
  // and second rounds without restarting, and to explicitly go to final jeopardy only when they mean to.

  // Toggles first and second rounds
  onToggleRound() {
    if (this.state.round === 1) {
      const newValues = this.state.buttonValues.map(value => {
        return value * 2;
      });
      this.setState(() => {
        return {
          buttonValues: newValues,
          round: 2
        };
      });
    } else if (this.state.round === 2) {
      const newValues = this.state.buttonValues.map(value => {
        return value / 2;
      });
      this.setState(() => {
        return {
          buttonValues: newValues,
          round: 1
        };
      });
    }
  }

  // Go to final Jeopardy round
  onGoToFinalRound() {
    this.setState(() => {
      return {
        round: 3
      };
    });
  }

  // If less than four players, allow adding new ones
  shouldAddNewPlayer() {
    const lastPlayer = this.state.players[this.state.players.length - 1];

    if (this.state.players.length > 0 || lastPlayer === 'New') {
      this.setState(() => {
        return {
          addingPlayer: true
        };
      });
    } else {
      this.setState(() => {
        return {
          addingPlayer: false
        };
      });
    }
  }

  // Adds a new player to the state when AddPlayer is submitted
  onCreatePlayer(e) {
    e.preventDefault();

    const newPlayer = document.querySelector('.player__input-name').value;
    const newPlayerList = this.state.players.slice(0, -1).concat(newPlayer);
    const otherScores = this.state.playerScores;
    const players = this.state.players.map(player => {
      return player.toLowerCase();
    });

    if (!players.includes(newPlayer.toLowerCase())) {
      this.setState(() => {
        return {
          players: newPlayerList,
          addingPlayer: false,
          playerScores: {
            ...otherScores,
            [newPlayerList.length - 1]: 0
          }
        };
      });
    } else {
      alert(
        `${newPlayer} has already been added. Please choose a different name.`
      );
    }
  }

  // Handle colors for positive (white) and negative (red) scores
  handleScores() {
    const playerScores = document.querySelectorAll('.score');

    playerScores.forEach((playerScore, idx) => {
      playerScore.style.color =
        this.state.playerScores[idx] >= 0 ? '#fff' : '#C54046';
    });
  }

  // Starts a wager
  onStartWager(player) {
    this.setState(() => {
      return {
        isWagering: player
      };
    });
  }

  // Handles a wager, ie daily double
  onWager(playerKey, isCorrect) {
    const playerScore = this.state.playerScores[playerKey];
    let wager = parseInt(document.querySelector('.player-wager').value, 10);

    // If wager is higher than the player's score, reduce it to the greater of:
    // - The player's score
    // - The maximum wager for that round (1000 for first round, 2000 for second)
    if (wager > playerScore) {
      let max;
      if (this.state.round === 1) {
        max = 1000;
      } else {
        max = 2000;
      }
      wager = wager > max ? max : wager;
    }

    if (!wager) {
      this.setState(() => {
        return {
          isWagering: 0
        };
      });
    } else {
      const newScore = isCorrect ? playerScore + wager : playerScore - wager;
      const otherScores = this.state.playerScores;
      const correctedPlayer = this.state.isWagering - 1;

      this.setState(() => {
        return {
          playerScores: {
            ...otherScores,
            [correctedPlayer]: newScore
          },
          isWagering: 0
        };
      });
    }
  }

  // Store wager data for Final Jeopardy
  onFinalWager(playerKey) {
    // Read wager amount from input
    const wager = parseInt(
      document.querySelector(`.final-wager-${playerKey}`).value,
      10
    );

    const otherWagers = this.state.final.wagers;
    let isFinalWager;

    // Check if there is only one player, if so marks this as the final wager
    if (this.state.players.length === 1) {
      isFinalWager = true;
    } else {
      // If others have wagered, check to see if everyone has entered at least one wager
      isFinalWager = otherWagers
        ? Object.keys(otherWagers).length >= this.state.players.length - 1
        : false;
    }

    if (wager <= this.state.playerScores[playerKey]) {
      this.setState(() => {
        return {
          final: {
            wagers: {
              ...otherWagers,
              [playerKey]: wager
            }
          },
          isFinalWager
        };
      });
    } else {
      alert('Wager must be less than or equal to your score');
    }

    document.querySelector(`.final-wager-${playerKey}`).value = '';
  }

  // Lock in final wager and move to the answer portion of final Jeopardy
  onLockFinalWagers() {
    this.setState(() => {
      return {
        round: 4
      };
    });
  }

  // Lock in your final answers after placing wagers
  onFinalAnswer(playerKey) {
    const answer = document
      .querySelector(`.final-answer-${playerKey}`)
      .value.trim();
    const otherAnswers = this.state.final.answers;
    let isFinalAnswer;
    if (this.state.players.length === 1) {
      isFinalAnswer = true;
    } else {
      isFinalAnswer = otherAnswers
        ? Object.keys(otherAnswers).length >= this.state.players.length - 1
        : false;
    }

    this.setState(() => {
      return {
        final: {
          ...this.state.final,
          answers: {
            ...otherAnswers,
            [playerKey]: answer
          }
        },
        isFinalAnswer
      };
    });

    document.querySelector(`.final-answer-${playerKey}`).value = '';
  }

  // Lock in final answers
  onLockFinalAnswers() {
    this.setState(() => {
      return {
        round: 5
      };
    });
  }

  //Checks to see if Final Jeopardy answer was correct
  onFinalAnswerCheck(playerKey, isCorrect) {
    const playersWhoHaveAnswered = this.state.final.haveAnswered || [];
    const hasAnswered = playersWhoHaveAnswered.includes(playerKey);

    // Make sure this player has not already incremented/decremented their final score before making the change
    if (!hasAnswered) {
      const playerWager = this.state.final.wagers[playerKey];
      const newScore = isCorrect
        ? this.state.playerScores[playerKey] + playerWager
        : this.state.playerScores[playerKey] - playerWager;
      const otherScores = this.state.playerScores;

      this.setState(() => {
        return {
          playerScores: {
            ...otherScores,
            [playerKey]: newScore
          },
          final: {
            ...this.state.final,
            haveAnswered: [...playersWhoHaveAnswered, playerKey]
          }
        };
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header title="Jprdy!" />
        <div className="App__container">
          <ScoreButtonList
            buttonValues={this.state.buttonValues}
            onSelectValue={this.onSelectValue}
          />
          <PlayerList
            players={this.state.players}
            onAnswer={this.onAnswer}
            onWager={this.onWager}
            onStartWager={this.onStartWager}
            isWagering={this.state.isWagering}
            needName={this.state.addingPlayer}
            createPlayer={this.onCreatePlayer}
            playerScores={this.state.playerScores}
            round={this.state.round}
            onFinalWager={this.onFinalWager}
            onFinalAnswer={this.onFinalAnswer}
            onFinalAnswerCheck={this.onFinalAnswerCheck}
            finalData={this.state.final}
          />
          <ActionList
            onAddPlayer={this.onAddPlayer}
            gameInProgress={this.state.gameInProgress}
            addingPlayer={this.state.addingPlayer}
            numPlayers={this.state.players.length}
            round={this.state.round}
            onToggleRound={this.onToggleRound}
            onGoToFinalRound={this.onGoToFinalRound}
            onClearScores={this.onClearScores}
            onReset={this.onReset}
            isFinalWager={this.state.isFinalWager}
            isFinalAnswer={this.state.isFinalAnswer}
            onLockFinalWagers={this.onLockFinalWagers}
            onLockFinalAnswers={this.onLockFinalAnswers}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
