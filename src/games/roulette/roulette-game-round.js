import { numbersOnBoard } from "./roulette-numbers-on-board";
import { betTypes } from "./bet-types-and-locations";

export class RouletteSpin {
  constructor(props) {
    // game id, players, etc

    this.bets = [];
    this.open = true; // can accept bets
    this.startSpin = props.startSpin;
  }

  placeBets(bets) {
    if (!this.open) throw new Error('Bets are closed for this round');
    this.bets = this.bets.concat(bets)
  }

  getBets() {
    return this.bets;
  }

 
  getWinningNumber() {
    return Math.floor(Math.random() * 37);
  }

  getBetReducer({ winningField }) {
    const reducer = (p, { type, location, user, value }) => {
      if (winningField[type][location]) {
        const multiplier = betTypes[type].getPayoutMultiplier(location)
        p.push({ user, value, payout: value * multiplier, multiplier, location, type})
      }
      return p;
    }
    return reducer;
  }

  getWinnings({ winningNumber }) {
    const winningField = numbersOnBoard[winningNumber];
    const betReducer = this.getBetReducer({ winningField });
    const winnings = this.bets.reduce(betReducer, []);
    return winnings;
  }

  start () {
    this.open = false;
    const winningNumber = this.getWinningNumber();
    const winnings = this.getWinnings({ winningNumber });
    this.startSpin({ winningNumber, winnings });
  }

}
