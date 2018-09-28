import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { singletonState } from '../singletonState';

export default class Hall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = () => {
    console.log('jonapot');
  }
  nameChanged(e) {
    console.log({ n: e.target.value });
    this.setState({username: e.target.value});
    singletonState.username = e.target.value;
  }
  componentDidMount = async () => {
    const { data } = await axios.get('/api/user/lllllllll');
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
          <input placeholder="Your username" onChange={e => this.nameChanged(e)} value={this.state.username}></input>
        </p>
      </div>
    )
  }
}
