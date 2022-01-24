const sum = require('../src/02');

describe('Requisito 02', () => {
  it('Deve retornar a soma correta', () => {
    expect(sum(1, 2, 3, 4, 5)).toEqual(15);
    expect(sum(-1, 2)).toEqual(1);
    expect(sum()).toEqual(0);
  });
});
