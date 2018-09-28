export const betTypes = {
  number: {
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    getPayoutMultiplier: () => 36, 
  },
  color: {
    values: ['red', 'black'],
    getPayoutMultiplier: () => 2, 
  },
  range: {
    values: ['1-12', '13-24', '25-36', '1-18', '19-36'],
    getPayoutMultiplier: (value) => (value === '1-18' || value === '19-36') ? 2 : 3, 
  },
  row: {
    values: [1, 2, 3],
    getPayoutMultiplier: () => 3, 
  },
  col: {
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    getPayoutMultiplier: () => 12, 
  },
  evenOdd: {
    values: ['even', 'odd'],
    getPayoutMultiplier: () => 2, 
  },
};
