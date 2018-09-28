import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { singletonState } from '../singletonState';

export default class Slotmachine extends Component {
  handleClick = () => {
    console.log('jonapot');
  }
  render() {
    return (
      <div className='slot-machine'>
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
