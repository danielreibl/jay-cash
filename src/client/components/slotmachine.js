import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      spinned: false,
      isPair: false,
      spinReels: [0, 1, 2],
      reels: [0, 4, 8].map(i => this.generateSlot(i)),
    }
  }
  resetMachine() {
    this.setState({
      bet: this.state.bet,
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
      spinned: false,
      isPair: true,
      spinReels: [uniqueReel],
      reels: this.state.reels, // TODO:
    })

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

    if (elementArray) {
      return elementArray.concat(divs.map((value => (<div style={this.getStyle(value)}></div>))));
    }
    return (
      divs.map((value => (<div style={this.getStyle(value)}></div>)))
    )
  };
  removeFunds = async({ amount }) => {
    // TODO: take money
    console.log('removing', amount)
  }
  addFunds = async({ amount }) => {
    // TODO: add money
    console.log('adding', amount)

  }
  spin = async() => {
    this.setState({ spinned: true });
    const result = [0, 1, 2].map(e => this.getRandom());

    // help some wins
    if (Math.random() > 0.975) result[1] = result[0];
    if (Math.random() > 0.975) result[1] = result[2];
    if (Math.random() > 0.975) result[0] = result[2];
    if (Math.random() > 0.98) result[0] = result[2] = result[1];

    await this.removeFunds({ amount: this.state.bet });

    console.log(result)

    const reels = result.map((r, i) => this.state.reels[i].concat(this.generateSlot(r)));
    this.setState({ reels });

    if (result[0] === result[1] && result[0] === result[2]) return await this.handleWin({ result });
    if (result[0] === result[1] || result[0] === result[2] || result[1] === result[2]) return await this.handlePair({ result });
    return await this.resetMachine();
  }

  render() {
    return (
      <div className="slot-machine" id="slot-machine">
        <button onClick={() => this.increaseBet()}>+</button>
        <button onClick={() => this.decreaseBet()}>-</button>
        <button onClick={() => this.spin()}>spin</button>
        {this.state.bet}


        

        <div className="slot-body">
          {this.state.reels}
        </div>


        <p>
          <Link to="/">i want to go and win elswhere</Link>
        </p>

      </div>
    )
  }
}
