import React from 'react';
import './styles/AddPlayer.css';

import Modal from 'react-modal'

import AddPlayerButton from './AddPlayerButton';

class AddPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalOpen: false,
			name: ''
		};

		this.modalOpen = this.modalOpen.bind(this);
		this.modalClose = this.modalClose.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	modalOpen() {
		this.setState({
			modalOpen: true
		});
	}

	modalClose() {
		this.setState({
			modalOpen: false,
			name: ''
		});
	}

	onChange(e) {
		e.preventDefault();
    this.setState({
      name: e.target.value
    });
  }

  onSubmit(e) {
  	e.preventDefault();

  	this.props.onAddPlayer(this.state.name);
  	this.modalClose();
  }

	render() {
		return (
			<div className="add-player-container">
				<AddPlayerButton 
					shouldDisplay={this.props.numPlayers < 4 ? true : false}
					onOpenModal={this.modalOpen}/>
				<Modal
	        isOpen={this.state.modalOpen}
	        contentLabel="Add New Player"
	        onAfterOpen={() => this.refs.name.focus()}>
	        	<div className="modal-form">
	        		<input 
	        			type="text"
	        			ref="name"
	        			value={this.state.name}
	        			placeholder="New Player"
	        			onChange={this.onChange.bind(this)} />
	        		<button className="modal-button" onClick={this.onSubmit}>Add Player</button>
	        		<button className="modal-button" onClick={this.modalClose}>Cancel</button>
	        	</div>
	       </Modal>
			</div>
		);
	}	
};

export default AddPlayer;