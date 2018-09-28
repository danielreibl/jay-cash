import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { singletonState } from '../singletonState';
import './hall.scss';

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
      <div id="hall">
         <div class="header">
            <h1>JayCash</h1>
          </div>

          <div className="content">
          <h2>Welcome to JayCash Casino!</h2>
        <p>
          <div className="links">
          <Link className="roluette" to="/roulette">roulette</Link>
          {/*<Link to="/blackjack">blackjack</Link>*/}
          <Link className="slotmachine" to="/slotmachine">slotmachine</Link>
          </div>
          <button onClick={() => this.handleClick()}>click me and watch console</button>
          <input placeholder="Your username" onChange={e => this.nameChanged(e)} value={this.state.username}></input>
        </p>
        </div>
      </div>
    )
  }
}
