import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { singletonState } from '../singletonState';
import './slotmachine.scss';
import { imageValues } from '../../games/slotmachine/image-values';

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;
const getRndInteger = (min, max, prev) => {
  let rnd = generateRandom(min, max);
  while (rnd === prev) rnd = generateRandom(min, max);
  return rnd;
};
const WHEEL_LENGTH = 50;

export default class Slotmachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bet: 10,
      result: [0, 4, 8],
      spinned: false,
      isPair: false,
      spinReels: [0, 1, 2], 
      reels: [0, 4, 8].map(i => this.generateSlot(i)),
      user: {
        coin: 0,
      },
      userName: 'nickey',
      nextUser: 'nickey',
    }
  }
  changeNextUser = (e) => {
    this.setState({
      nextUser: e.target.value
    });
  }
  changeUser = async () => {
    const { data } = await axios.get(`/api/user/${this.state.nextUser}`);
    this.setState({
      user: data,
      userName: data.name,
    });
  }
  resetMachine() {
    this.setState({
      bet: this.state.bet,
      result: this.state.result,
      spinned: false,
      isPair: false,
      spinReels: [0, 1, 2],
      reels: this.state.reels, // TODO:
    });
  }
  increaseBet() {
    this.setState({ bet: this.state.bet + 10 });
  }
  decreaseBet() {
    if (this.state.bet >= 11) this.setState({ bet: this.state.bet - 10 });
  }
  getRandom() {
    return Math.floor(Math.random() * 12);
  }
  handleWin = async({ result }) => {
    const winning = (result[0] === result[1] && result[0] === result[2] && imageValues[ result[0] ] * this.state.bet) || 0;
    console.log('WON:', winning);
    await this.addFunds({ amount: winning });
  }
  handlePair = async({ result }) => {
    console.log('PAIR:');
    let uniqueReel = null;
    switch (true) {
      case result[0] === result[1]:
        uniqueReel = 2;
        break;
      case result[0] === result[2]:
        uniqueReel = 1;
        break;
      case result[1] === result[2]:
        uniqueReel = 0;
        break;
      default:
        throw new Error('pair is not a pair');
    }
    console.log({ uniqueReel })
    // TODO:
    this.setState({
      bet: this.state.bet,
      result: this.state.result,
      spinned: false,
      isPair: true,
      spinReels: [uniqueReel],
      reels: this.state.reels, // TODO:
    })

  }

  componentDidMount = async() => {
    const { data } = await axios.get(`/api/user/${this.state.userName}`);
    this.setState({
      user: data
    });
  }

  getStyle = (value) => ({
    width: '100%',
    'padding-bottom': '100%',
    'background-image': `url("assets/images/${value}.jpg")`,
    'background-size': 'cover',
  });
  generateSlot = (winner, elementArray) => {
    let prev = -1;
    const divs = [ ...Array.from({length: WHEEL_LENGTH - 2}, () => {
      prev = getRndInteger(0, 11, prev);
      return prev;
    }), winner, getRndInteger(0, 11)];

    /*if (elementArray) {
      return elementArray.concat(divs.map((value => (<div style={this.getStyle(value)}></div>))));
    }*/
    return (
      divs.map((value => (<div style={this.getStyle(value)}></div>)))
    )
  };
  removeFunds = async ({ amount }) => {
    const result = await axios.post('/api/bet', {
      userName: this.state.userName, bet: this.state.bet, change: -amount,
    });
    this.setState({
      user: {
        ...this.state.user, coin: result.data.coin
      }
    });
    console.log('removing', amount, result.data.coin);
  }
  addFunds = async ({ amount }) => {
    const result = await axios.post('/api/bet', {
      userName: this.state.userName, bet: this.state.bet, change: amount,
    });
    this.setState({
      user: {
        ...this.state.user, coin: result.data.coin
      }
    });
    console.log('adding', amount, result.data);
  }
  spin = async() => {
    this.setState({ spinned: true });
    let result = [0, 1, 2].map(e => this.getRandom());

    // help some wins
    if (Math.random() > 0.975) result[1] = result[0];
    if (Math.random() > 0.975) result[1] = result[2];
    if (Math.random() > 0.975) result[0] = result[2];
    if (Math.random() > 0.98) result[0] = result[2] = result[1];

    // if (this.state.isPair) {
    //   this.setState({ isPair: false });
    result = result.map((r, i) => (this.state.spinReels.indexOf(i) >= 0) ? r : this.state.result[i]);
    // }

    await this.removeFunds({ amount: this.state.bet });

    console.log(result)

    const reels = result.map((r, i) => this.generateSlot(r).concat( this.state.reels[i] ));
    this.setState({ reels, result });

    if (result[0] === result[1] && result[0] === result[2]) return await this.handleWin({ result });
    if (result[0] === result[1] || result[0] === result[2] || result[1] === result[2]) return await this.handlePair({ result });
    return await this.resetMachine();
  }

  render() {
    return (
      <div className="slot-machine" id="slot-machine">
        <div class="header">
          <input type="text" value={this.state.nextUser} onChange={(e) => this.changeNextUser(e)}></input><button onClick={() => this.changeUser()}>Login user</button>
          <h1>JayCash</h1>
        </div>
        {this.state.bet}

        <div className="slot-body">
          <div>
            <div>{this.state.reels[0]}</div>
          </div>
          <div>
            <div>{this.state.reels[1]}</div>
          </div>
          <div>
            <div>{this.state.reels[2]}</div>
          </div>
        </div>


        <p>
          <Link to="/">i want to go and win elswhere</Link>
        </p>

        <div class="player">
          <div class="money">{this.state.user.coin}$</div>
          <div class="image">
            <img src="/assets/images/user.png" alt="theuser" />
          </div>

            <button onClick={() => this.increaseBet()}>+</button>
        <button onClick={() => this.decreaseBet()}>-</button>
        <button onClick={() => this.spin()}>spin</button>
        </div>

      </div>
    )
  }
}
