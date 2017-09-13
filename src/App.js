import React, { Component } from 'react';
//import './styles/App.css';	

import Header from './Header';
import ScoreButtonList from './ScoreButtonList';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			buttonValues: [200, 400, 600, 800, 1000],
			activeValue: 0,
			players: [],
			addingPlayer: false,
			round: 1,
			playerScores: []
		};

		this.onSelectValue = this.onSelectValue.bind(this);
		this.onAddPlayer = this.onAddPlayer.bind(this);
		this.onAnswer = this.onAnswer.bind(this);
		this.onRoundChange = this.onRoundChange.bind(this);
		this.onCreatePlayer = this.onCreatePlayer.bind(this);
	}

	// Sets the active value when a score button is clicked
	onSelectValue(value, key) {
		this.setState({
			activeValue: value
		});

		var allScoreButtons = document.querySelectorAll('.score-button');
		var newActiveButton = document.querySelector(`.button-${key}`);

		allScoreButtons.forEach((button) => {
			button.classList.remove('activeButton')
		});

		newActiveButton.classList.add('activeButton');
	}

	// Intermediate state when adding a new player
	onAddPlayer(newPlayer) {
		// this will take a player object with name and score props
		this.setState({
			players: this.state.players.concat(newPlayer),
			addingPlayer: true
		})
	}

	// Score update handlers - need to get the key prop from players
	onAnswer(playerKey, isCorrect) {
		const newScore = isCorrect ? (this.state.playerScores[playerKey] + this.state.activeValue) : (this.state.playerScores[playerKey] - this.state.activeValue);

		this.setState({
			playerScores: {
				[playerKey]: newScore
			}
		});

		const dollarValue = document.querySelector(`#score-${playerKey}`);
		dollarValue.style.color = newScore >= 0 ? '#fff' : '#C54046';
	}

	// Handle round changes
	onRoundChange() {
		const newValues = this.state.buttonValues.map((value) => {
			return value * 2;
		});

		if (this.state.round === 1) {
			this.setState({
				buttonValues: newValues,
				round: 2
			});
		}
	}

	// If less than four players, allow adding new ones
	shouldAddNewPlayer() {
		const lastPlayer = this.state.players[this.state.players.length - 1]

		if (this.state.players.length > 0 || lastPlayer === 'New') {
			this.setState({
				addingPlayer: true
			});
		} else {
			this.setState({
				addingPlayer: false
			});
		}
	}

	// Adds a new player to the state when AddPlayer is submitted
	onCreatePlayer(e) {
		e.preventDefault();

		const newPlayer = document.querySelector('.add-new-player').value;
		const newPlayerList = this.state.players.slice(0, -1).concat(newPlayer);

		this.setState({
			players: newPlayerList,
			addingPlayer: false,
			playerScores: {
				[newPlayerList.length - 1]: 0
			}
		});
	}

  render() {
    return (
      <div className="App">
        <Header title="Jeopardy!" />
        <ScoreButtonList buttonValues={this.state.buttonValues} onSelectValue={this.onSelectValue}/>
        <PlayerList 
					players={this.state.players}
					onAnswer={this.onAnswer}
					needName={this.state.addingPlayer}
					createPlayer={this.onCreatePlayer}
					playerScores={this.state.playerScores}/>
        <AddPlayer 
        	onAddPlayer={this.onAddPlayer} 
        	numPlayers={this.state.players.length}
        	shouldDisplay={!this.state.addingPlayer}/>


        <button onClick={() => console.log(this.state)}>Check State</button>
        <button onClick={this.onRoundChange}>Double</button>
      </div>
    );
  }
}

export default App;
