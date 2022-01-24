const shipLength = require('../src/07');

const titanic = {
  name: 'Titanic',
  length: 269.1,
  measurementUnit: 'meters',
};
const queenMary = {
  name: 'Queen Mary 2',
  length: 1132,
  measurementUnit: 'feet',
};
const yamato = {
  name: 'Yamato',
  length: 256,
  measurementUnit: 'meters',
};

describe('Requisito 07', () => {
  it('Deve retornar a string correta', () => {
    expect(shipLength(titanic)).toEqual('Titanic is 269.1 meters long');
    expect(shipLength(queenMary)).toEqual('Queen Mary 2 is 1132 feet long');
    expect(shipLength(yamato)).toEqual('Yamato is 256 meters long');
  });
});
