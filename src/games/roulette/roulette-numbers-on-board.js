const fill = len => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(i);
  }
  return arr;
}
const filled = fill(37);

export const numbersOnBoard = [
  { number: 0, color: {green: true } },
  { number: 1, color: {red: true } },
  { number: 2, color: {red: false } },
  { number: 3, color: {red: true } },
  { number: 4, color: {red: false } },
  { number: 5, color: {red: true } },
  { number: 6, color: {red: false } },
  { number: 7, color: {red: true } },
  { number: 8, color: {red: false } },
  { number: 9, color: {red: true } },
  { number: 10, color: {red: false } },
  { number: 11, color: {red: false } },
  { number: 12, color: {red: true } },
  { number: 13, color: {red: false } },
  { number: 14, color: {red: true } },
  { number: 15, color: {red: false } },
  { number: 16, color: {red: true } },
  { number: 17, color: {red: false } },
  { number: 18, color: {red: true } },
  { number: 19, color: {red: true } },
  { number: 20, color: {red: false } },
  { number: 21, color: {red: true } },
  { number: 22, color: {red: false } },
  { number: 23, color: {red: true } },
  { number: 24, color: {red: false } },
  { number: 25, color: {red: true } },
  { number: 26, color: {red: false } },
  { number: 27, color: {red: true } },
  { number: 28, color: {red: false } },
  { number: 29, color: {red: false } },
  { number: 30, color: {red: true } },
  { number: 31, color: {red: false } },
  { number: 32, color: {red: true } },
  { number: 33, color: {red: false } },
  { number: 34, color: {red: true } },
  { number: 35, color: {red: false } },
  { number: 36, color: {red: true } },
].map(field => {
  const { number, color: {red, green} } = field;
  return {
    number: filled.map(n => n === number),
    color: {
      red: !!red,
      black: !red && !green,
      green: !!green
    },
    range: {
      '1-12': number < 13 && number > 0,
      '13-24': number > 12 && number < 25,
      '25-36': number > 24,
      '1-18': number < 19 && number > 0,
      '19-36': number > 18,
    },
    row: {
      '1': number % 3 === 1,
      '2': number % 3 === 2,
      '3': number % 3 === 0 && !green,
    },
    col: {
      '1': Math.floor((number - 1) / 3) === 0,
      '2': Math.floor((number - 1) / 3) === 1,
      '3': Math.floor((number - 1) / 3) === 2,
      '4': Math.floor((number - 1) / 3) === 3,
      '5': Math.floor((number - 1) / 3) === 4,
      '6': Math.floor((number - 1) / 3) === 5,
      '7': Math.floor((number - 1) / 3) === 6,
      '8': Math.floor((number - 1) / 3) === 7,
      '9': Math.floor((number - 1) / 3) === 8,
      '10': Math.floor((number - 1) / 3) === 9,
      '11': Math.floor((number - 1) / 3) === 10,
      '12': Math.floor((number - 1) / 3) === 11,
    },
    evenOdd: {
      even: (number % 2 === 0) && !green,
      odd: number % 2 === 1,
    },
  };
});
