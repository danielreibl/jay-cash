import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Slotmachine extends Component {
  handleClick = () => {
    console.log('jonapot');
  }
  render() {
    return (
      <div className='hello-world'>
        <h1>Hello Felkaru World</h1>
        <p>
          Welcome to my world<br />
          <Link to="/">i want to go and win elswhere</Link>
        </p>
      </div>
    )
  }
}
