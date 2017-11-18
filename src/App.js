import React, { Component } from 'react';
// import './styles/App.css';

import Header from './Header';
import ScoreButtonList from './ScoreButtonList';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';
import RoundChange from './RoundChange';

const initState = {
	buttonValues: [200, 400, 600, 800, 1000],
	activeValue: 0,
	players: [],
	addingPlayer: false,
	round: 1,
	playerScores: [],
	isWagering: false
};

class App extends Component {
	constructor(props) {
		super(props);

		this.state = initState;

		this.handleScores = this.handleScores.bind(this);
		this.onReset = this.onReset.bind(this);
		this.onSelectValue = this.onSelectValue.bind(this);
		this.onAddPlayer = this.onAddPlayer.bind(this);
		this.onAnswer = this.onAnswer.bind(this);
		this.onRoundChange = this.onRoundChange.bind(this);
		this.onCreatePlayer = this.onCreatePlayer.bind(this);
		this.onWager = this.onWager.bind(this);
		this.onStartWager = this.onStartWager.bind(this);
	}

	// Load from localStorage if present
	componentWillMount() {
		const appState = JSON.parse(localStorage.getItem('appState'));
		if (appState) {
			this.setState(() => {
				return {
					...appState
				};
			});
			this.handleScores();
		}
	}

	// Save state to localStorage on creation
	componentDidMount() {
		localStorage.setItem('appState', JSON.stringify(this.state));
		this.handleScores();
	}

	// Save state to localStorage on update
	componentDidUpdate() {
		localStorage.setItem('appState', JSON.stringify(this.state));
		this.handleScores();
	}

	// Reset state
	onReset() {
		this.setState(() => {
			return {
				...initState
			};
		});
	}

	// Sets the active value when a score button is clicked
	onSelectValue(value, key) {
		this.setState(() => {
			return {
				activeValue: value
			};
		});

		var allScoreButtons = document.querySelectorAll('.score-button');
		var newActiveButton = document.querySelector(`.button-${key}`);

		allScoreButtons.forEach(button => {
			button.classList.remove('activeButton');
		});

		newActiveButton.classList.add('activeButton');
	}

	// Intermediate state when adding a new player
	onAddPlayer(newPlayer) {
		// this will take a player object with name and score props
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
				playerScores: {
					...otherScores,
					[playerKey]: newScore
				}
			};
		});
	}

	// Handle round changes
	onRoundChange() {
		const newValues = this.state.buttonValues.map(value => {
			return value * 2;
		});

		if (this.state.round === 1) {
			this.setState(() => {
				return {
					buttonValues: newValues,
					round: 2
				};
			});
		} else {
			this.setState(() => {
				return {
					round: 3
				};
			});
		}
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

		const newPlayer = document.querySelector('.add-new-player').value;
		const newPlayerList = this.state.players.slice(0, -1).concat(newPlayer);
		const otherScores = this.state.playerScores;

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
	}

	// Handle colors for positive and negative scores
	handleScores() {
		const playerScores = document.querySelectorAll('.score');

		playerScores.forEach((playerScore, idx) => {
			playerScore.style.color =
				this.state.playerScores[idx] >= 0 ? '#fff' : '#C54046';
		});
	}

	// Starts a wager
	onStartWager() {
		this.setState(() => {
			return {
				isWagering: true
			}
		});
	}

	// Handles a wager, ie daily double
	onWager(playerKey, isCorrect) {
		const wager = document.querySelector('.player-wager').value;

		console.log(wager)

		const newScore = isCorrect
			? this.state.playerScores[playerKey] + parseInt(wager, 10)
			: this.state.playerScores[playerKey] - parseInt(wager, 10);
		const otherScores = this.state.playerScores;

		this.setState(() => {
			return {
				playerScores: {
					...otherScores,
					[playerKey]: newScore
				},
				isWagering: false
			};
		});
	}

	render() {
		return (
			<div className="App">
				<Header title="Jprdy!" />
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
				/>
				<AddPlayer
					onAddPlayer={this.onAddPlayer}
					numPlayers={this.state.players.length}
					shouldDisplay={!this.state.addingPlayer}
				/>
				<RoundChange
					round={this.state.round}
					onRoundChange={this.onRoundChange}
					shouldDisplay={this.state.round < 3}
				/>

				<button onClick={this.onReset}>Reset</button>
			</div>
		);
	}
}

export default App;
