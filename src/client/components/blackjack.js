import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Blackjack extends Component {
  handleClick = () => {
    console.log('jonapot');
  }
  render() {
    return (
      <div className='hello-world'>
        <h1>Hello Blackjack World</h1>
        <p>
          Welcome to my world<br />
          <Link to="/">i want to go and win elswhere</Link>
          <iframe width={800} height={600} src={'http://www.arkadium.com/games/blackjack/'}></iframe>
        </p>
      </div>
    )
  }
}
