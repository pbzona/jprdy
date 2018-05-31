// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

const expect = require('chai').expect;

// describe('Rendering', () => {
// 	it('renders without crashing', () => {
// 		const div = document.createElement('div');
// 		ReactDOM.render(<App />, div);
// 	});
// });

global.window = {};
// import localStorage from 'mock-local-storage';
let localStorage = require('mock-local-storage');
window.localStorage = global.localStorage;

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
		answers: {}
	},
	gameInProgress: false
};

// describe('App state', () => {
// 	before(() => {
// 		localStorage = initState;
// 	});

// 	it('should have a state with the proper keys', () => {
// 		const keys = Object(localStorage).keys
// 		expect(keys).to.equal(Object.keys(initState));
// 	});
// });

localStorage = initState;
console.log(JSON.stringify(localStorage));

