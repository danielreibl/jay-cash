import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './roulette.scss';
import { RouletteSpin } from '../../games/roulette/roulette-game-round';

export default class Roulette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinTo: undefined,
      bets: [
        {
          type: 'range',
          location: '1-18',
          value: 100,
          user: 'bela'
        },
        {
          type: 'color',
          location: 'red',
          value: 200,
          user: 'bela'
        }
      ]
    };
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
  placeBet = () => {
    //TODO: update bets on state
  }
  render() {
    window.Rgm = RouletteSpin
    return (
      <div>
        <main>
          <div id="roulette">
            <div className="wheel-border"></div>
            <div className="base">
              <div className="wheel">
                <div className="wheel-wood">
                  <div className="wheel-steel">
                    <div className="wheel-numbers">
                      <div className="nmb green" id="nmb0"><span>0</span><div class="coin"><span>400 $</span></div></div>
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
                <div className="board-bank green-bg">0</div>
                <div className="board-top">
                  <div className="nmb red-bg">3</div>
                  <div className="nmb black-bg">6</div>
                  <div className="nmb red-bg">9</div>
                  <div className="nmb red-bg">12</div>
                  <div className="nmb black-bg">15</div>
                  <div className="nmb red-bg">18</div>
                  <div className="nmb red-bg">21</div>
                  <div className="nmb black-bg">24</div>
                  <div className="nmb red-bg">27</div>
                  <div className="nmb red-bg">30</div>
                  <div className="nmb black-bg">33</div>
                  <div className="nmb red-bg">36</div>

                  <div className="nmb">2:1</div>

                  <div className="nmb black-bg">2</div>
                  <div className="nmb red-bg">5</div>
                  <div className="nmb black-bg">8</div>
                  <div className="nmb black-bg">11</div>
                  <div className="nmb red-bg">14</div>
                  <div className="nmb black-bg">17</div>
                  <div className="nmb black-bg">20</div>
                  <div className="nmb red-bg">23</div>
                  <div className="nmb black-bg">26</div>
                  <div className="nmb black-bg">29</div>
                  <div className="nmb red-bg">32</div>
                  <div className="nmb black-bg">35</div>

                  <div className="nmb">2:1</div>

                  <div className="nmb red-bg">1</div>
                  <div className="nmb black-bg">4</div>
                  <div className="nmb red-bg">7</div>
                  <div className="nmb black-bg">10</div>
                  <div className="nmb black-bg">13</div>
                  <div className="nmb red-bg">16</div>
                  <div className="nmb red-bg">19</div>
                  <div className="nmb black-bg">22</div>
                  <div className="nmb red-bg">25</div>
                  <div className="nmb black-bg">28</div>
                  <div className="nmb black-bg">31</div>
                  <div className="nmb red-bg">34</div>

                  <div className="nmb">2:1</div>

                </div>
                <div className="board-bottom">
                  <div className="nmb nmb4x sup">1<sup>st</sup> 12</div>
                  <div className="nmb nmb4x sup">2<sup>nd</sup> 12</div>
                  <div className="nmb nmb4x sup">3<sup>rt</sup> 12</div>

                  <div className="nmb nmb2x">1 to 18</div>
                  <div className="nmb nmb2x">Even</div>
                  <div className="nmb nmb2x red-bg"></div>
                  <div className="nmb nmb2x black-bg"></div>
                  <div className="nmb nmb2x">Odd</div>
                  <div className="nmb nmb2x">19 to 36</div>
                </div>
              </div>
                
              <div class="player"></div>    
            </div>

          </div>
        </main>
        <button onClick={() => this.placeBet()}>Place Bet</button>
        <button onClick={() => this.spin()}>Spin!</button>
        <Link to="/">Get out!</Link>
      </div>
    )
  }
}
