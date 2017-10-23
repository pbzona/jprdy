import React from 'react';
import './styles/AddPlayer.css';

import AddPlayerButton from './AddPlayerButton';

class AddPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    // this.props.onAddPlayer(this.state.name);
    this.props.onAddPlayer("New");
  }

  render() {
    return (
      <div className="add-player-container">
        <AddPlayerButton
          shouldDisplay={
            !!(this.props.numPlayers < 4 && this.props.shouldDisplay === true)
          }
          handleClick={this.onSubmit}
        />
      </div>
    );
  }
}

export default AddPlayer;
