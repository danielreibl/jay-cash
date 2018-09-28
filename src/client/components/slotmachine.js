import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { singletonState } from '../singletonState';
import './slotmachine.scss';
export default class Slotmachine extends Component {
  constructor(props) {
    super(props)
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
  }
  render() {
    return (
      <div className="slot-machine">
        <h1>Hello Felkaru World</h1>
        <p>your name is {singletonState.username}</p>
        <p>
          Welcome to my world<br />
          <Link to="/">i want to go and win elswhere</Link>
        </p>
      

      </div>
    )
  }
}
