const swap = require('../src/05');

describe('Requisito 05', () => {
  it('Deve retornar o primeiro e o terceiro elemento com posições trocadas', () => {
    expect(swap([1, 2, 3])).toEqual([3, 2, 1]);
    expect(swap([9, 3, 1])).toEqual([1, 3, 9]);
  });
});
