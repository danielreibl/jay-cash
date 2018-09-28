import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Hall extends Component {
  handleClick = () => {
    console.log('jonapot');
  }
  componentDidMount = async () => {
    const { data } = await axios.get('/api/state');
    this.setState(data);
  }
  render() {
    console.log('state', this.state)
    return (
      <div className='hello-world'>
        <h1>Hello World Laci</h1>
        <p>
          Welcome to my world<br />
          <Link to="/roulette">roulette</Link><br />
          <Link to="/blackjack">blackjack</Link><br />
          <Link to="/slotmachine">slotmachine</Link><br />
          <button onClick={() => this.handleClick()}>click me and watch console</button>
        </p>
      </div>
    )
  }
}
