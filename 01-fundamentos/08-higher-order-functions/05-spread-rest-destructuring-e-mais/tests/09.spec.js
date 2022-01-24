const spreadSeasons = require('../src/09');

const expected = [
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  'January',
  'February',
];

describe('Requisito 09', () => {
  it('Deve retornar o array correto', () => {
    expect(spreadSeasons()).toEqual(expected);
  });
});
