import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './roulette.scss';
import { RouletteSpin } from '../../games/roulette/roulette-game-round';

export default class Roulette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinTo: undefined,
      bets: [
        
      ]
    };
  }
  getCoins = (type) => {
    const hasCoin = this.state.bets.find((bet) => `${bet.type}-${bet.location}` === type);
    if (hasCoin) return <div class="coin">coin</div>;
    return null;
  }
  startSpin = (result) => {
    const { winnings, winningNumber } = result;
    console.log({winnings, winningNumber});
    this.setState({spinTo: winningNumber.toString()});
  }
  spin = () => {
    const spin = new RouletteSpin({
      startSpin: this.startSpin,
    });
    spin.placeBets(this.state.bets);
    spin.start();
  }
  getSpinDuration() {
    return 200 + Math.floor(Math.random() * 500); // spins for min 2secs max 7 secs
  }
  placeBet = ({ type, location }) => {
    console.log('placing bet', {type, location});
    this.setState({
      bets: _.uniqWith([...this.state.bets, { type, location, value: 100, user: 1234 }], _.isEqual)
    });
    console.log(this.state.bets)
  }
  render() {
    window.Rgm = RouletteSpin
    return (
      <div>
        <main>
          <div id="roulette">
            <div className="wheel-border"></div>
            <div className="base">
              <div className={`wheel ${this.state.spinTo}`}  >
                <div className="wheel-wood">
                  <div className="wheel-steel">
                    <div className="wheel-numbers">
                      <div className="nmb green" id="nmb0"><span>0</span></div>
                      <div className="nmb red" id="nmb32"><span>32</span></div>
                      <div className="nmb black" id="nmb15"><span>15</span></div>
                      <div className="nmb red" id="nmb19"><span>19</span></div>
                      <div className="nmb black" id="nmb4"><span>4</span></div>
                      <div className="nmb red" id="nmb21"><span>21</span></div>
                      <div className="nmb black" id="nmb2"><span>2</span></div>
                      <div className="nmb red" id="nmb25"><span>25</span></div>
                      <div className="nmb black" id="nmb17"><span>17</span></div>
                      <div className="nmb red" id="nmb34"><span>34</span></div>
                      <div className="nmb black" id="nmb6"><span>6</span></div>
                      <div className="nmb red" id="nmb27"><span>27</span></div>
                      <div className="nmb black" id="nmb0"><span>13</span></div>
                      <div className="nmb red" id="nmb0"><span>36</span></div>
                      <div className="nmb black" id="nmb0"><span>11</span></div>
                      <div className="nmb red" id="nmb0"><span>30</span></div>
                      <div className="nmb black" id="nmb0"><span>8</span></div>
                      <div className="nmb red" id="nmb0"><span>23</span></div>
                      <div className="nmb black" id="nmb0"><span>10</span></div>
                      <div className="nmb red" id="nmb0"><span>5</span></div>
                      <div className="nmb black" id="nmb0"><span>24</span></div>
                      <div className="nmb red" id="nmb0"><span>16</span></div>
                      <div className="nmb black" id="nmb33"><span>33</span></div>
                      <div className="nmb red" id="nmb1"><span>1</span></div>
                      <div className="nmb black" id="nmb20"><span>20</span></div>
                      <div className="nmb red" id="nmb14"><span>14</span></div>
                      <div className="nmb black" id="nmb31"><span>31</span></div>
                      <div className="nmb red" id="nmb9"><span>9</span></div>
                      <div className="nmb black" id="nmb22"><span>22</span></div>
                      <div className="nmb red" id="nmb18"><span>18</span></div>
                      <div className="nmb black" id="nmb29"><span>29</span></div>
                      <div className="nmb red" id="nmb7"><span>7</span></div>
                      <div className="nmb black" id="nmb28"><span>28</span></div>
                      <div className="nmb red" id="nmb12"><span>12</span></div>
                      <div className="nmb black" id="nmb35"><span>35</span></div>
                      <div className="nmb red" id="nmb3"><span>3</span></div>
                      <div className="nmb black" id="nmb26"><span>26</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="board">
                <div className="board-bank green-bg" onClick={() => this.placeBet({ type: 'number', location: 0 })}>0{this.getCoins('number-0')}</div>
                <div className="board-top">
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 3 })}>3{this.getCoins('number-3')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 6 })}>6{this.getCoins('number-6')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 9 })}>9{this.getCoins('number-9')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 12 })}>12{this.getCoins('number-12')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 15 })}>15{this.getCoins('number-15')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 18 })}>18{this.getCoins('number-18')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 21 })}>21{this.getCoins('number-21')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 24 })}>24{this.getCoins('number-24')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 27 })}>27{this.getCoins('number-27')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 30 })}>30{this.getCoins('number-30')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 33 })}>33{this.getCoins('number-33')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 36 })}>36{this.getCoins('number-36')}</div>

                  <div className="nmb" onClick={() => this.placeBet({ type: 'row', location: 3 })}>2:1{this.getCoins('row-3')}</div>

                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 2 })}>2{this.getCoins('number-2')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 5 })}>5{this.getCoins('number-5')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 8 })}>8{this.getCoins('number-8')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 11 })}>11{this.getCoins('number-11')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 14 })}>14{this.getCoins('number-14')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 17 })}>17{this.getCoins('number-17')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 20 })}>20{this.getCoins('number-20')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 23 })}>23{this.getCoins('number-23')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 26 })}>26{this.getCoins('number-26')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 29 })}>29{this.getCoins('number-29')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 32 })}>32{this.getCoins('number-32')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 35 })}>35{this.getCoins('number-35')}</div>

                  <div className="nmb" onClick={() => this.placeBet({ type: 'row', location: 2 })}>2:1{this.getCoins('row-2')}</div>

                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 1 })}>1{this.getCoins('number-1')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 4 })}>4{this.getCoins('number-4')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 7 })}>7{this.getCoins('number-7')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 10 })}>10{this.getCoins('number-10')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 13 })}>13{this.getCoins('number-13')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 16 })}>16{this.getCoins('number-16')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 19 })}>19{this.getCoins('number-19')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 22 })}>22{this.getCoins('number-22')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 25 })}>25{this.getCoins('number-25')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 28 })}>28{this.getCoins('number-28')}</div>
                  <div className="nmb black-bg" onClick={() => this.placeBet({ type: 'number', location: 31 })}>31{this.getCoins('number-31')}</div>
                  <div className="nmb red-bg" onClick={() => this.placeBet({ type: 'number', location: 34 })}>34{this.getCoins('number-34')}</div>

                  <div className="nmb" onClick={() => this.placeBet({ type: 'row', location: 1 })}>2:1{this.getCoins('row-1')}</div>

                </div>
                <div className="board-bottom">
                  <div className="nmb nmb4x sup" onClick={() => this.placeBet({ type: 'range', location: '1-12' })}>1<sup>st</sup> 12{this.getCoins('range-1-12')}</div>
                  <div className="nmb nmb4x sup" onClick={() => this.placeBet({ type: 'range', location: '13-24' })}>2<sup>nd</sup> 12{this.getCoins('range-13-24')}</div>
                  <div className="nmb nmb4x sup" onClick={() => this.placeBet({ type: 'range', location: '25-36' })}>3<sup>rt</sup> 12{this.getCoins('range-25-36')}</div>

                  <div className="nmb nmb2x" onClick={() => this.placeBet({ type: 'range', location: '1-18' })}>1 to 18{this.getCoins('range-1-18')}</div>
                  <div className="nmb nmb2x" onClick={() => this.placeBet({ type: 'evenOdd', location: 'even' })}>Even{this.getCoins('evenOdd-even')}</div>
                  <div className="nmb nmb2x red-bg" onClick={() => this.placeBet({ type: 'color', location: 'red' })}>{this.getCoins('color-red')}</div>
                  <div className="nmb nmb2x black-bg" onClick={() => this.placeBet({ type: 'color', location: 'black' })}>{this.getCoins('color-black')}</div>
                  <div className="nmb nmb2x" onClick={() => this.placeBet({ type: 'evenOdd', location: 'odd' })}>Odd{this.getCoins('evenOdd-odd')}</div>
                  <div className="nmb nmb2x" onClick={() => this.placeBet({ type: 'range', location: '19-36' })}>19 to 36{this.getCoins('range-19-36')}  </div>
                </div>
              </div>
                
              <div class="player"></div>    
            </div>

          </div>
        </main>
        <button onClick={() => this.placeBet({ type: 'number', location: 0 })}>Place Bet</button>
        <button onClick={() => this.spin()}>Spin!</button>
        <Link to="/">Get out!</Link>
      </div>
    )
  }
}
