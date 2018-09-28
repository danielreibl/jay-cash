import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { singletonState } from '../singletonState';
import './slotmachine.scss';

const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;
const WHEEL_LENGTH = 50;

export default class Slotmachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bet: 10,
    }
  }
  increaseBet() {
    this.setState({ bet: this.state.bet + 10 });
  }
  decreaseBet() {
    if (this.state.bet >= 10) this.setState({ bet: this.state.bet - 10 });
  }
  handleClick = () => {
    console.log('jonapot');
  };
  getStyle = (value) => ({
    width: '100%',
    'padding-bottom': '100%',
    'background-image': `url("assets/images/${value}.jpg")`,
  });
  generateSlot = (winner) => {
    const divs = [ ...Array.from({length: WHEEL_LENGTH - 2}, () => getRndInteger(0, 11)), winner, getRndInteger(0, 11)];

    return (
      <div>
        { divs.map((value => (<div style={this.getStyle(value)}></div>))) }
      </div>
    )
  };
  render() {
    return (
      <div className="slot-machine">
        <h1>Hello Felkaru World</h1>
        <p>your name is {singletonState.username}</p>
        <p>
          <Link to="/">i want to go and win elswhere</Link>
        </p>

      </div>
    )
  }
}
