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
			addingPlayer: false
		};

		this.onSelectValue = this.onSelectValue.bind(this);
		this.onAddPlayer = this.onAddPlayer.bind(this);
		this.onAnswer = this.onAnswer.bind(this);
		this.onRoundChange = this.onRoundChange.bind(this);
		this.onCreatePlayer = this.onCreatePlayer.bind(this);
	}

	onSelectValue(value) {
		this.setState({
			activeValue: value
		});
	}

	onAddPlayer(newPlayer) {
		// this will take a player object with name and score props
		this.setState({
			players: this.state.players.concat(newPlayer),
			addingPlayer: true
		})
	}

	// score update handlers - need to get the key prop from players
	onAnswer(playerKey, isCorrect) {
		let dollarValue = document.querySelector(`#score-${playerKey}`);
		
		let score = parseInt(dollarValue.innerHTML.replace(/[,$]/g, ''), 10);
		let newScore = isCorrect ? score + this.state.activeValue : score - this.state.activeValue;

		dollarValue.style.color = newScore >= 0 ? '#fff' : '#C54046';

		if (newScore >= 0) {
			dollarValue.innerHTML = `$${require('numeral')(newScore).format('0,0')}`;
		} else {
			dollarValue.innerHTML = `-$${require('numeral')(newScore * -1).format('0,0')}`;
		}
	}

	onRoundChange() {
		const newValues = this.state.buttonValues.map((value) => {
			return value * 2;
		});

		this.setState({
			buttonValues: newValues
		});
	}

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

	onCreatePlayer(e) {
		e.preventDefault();

		const newPlayer = document.querySelector('#add-new-player').value;
		const newPlayerList = this.state.players.slice(0, -1).concat(newPlayer);

		this.setState({
			players: newPlayerList,
			addingPlayer: false
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
					createPlayer={this.onCreatePlayer}/>
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

// for debugging: saves state to localstorage:
// () => window.localStorage.setItem('state', JSON.stringify(this.state))
