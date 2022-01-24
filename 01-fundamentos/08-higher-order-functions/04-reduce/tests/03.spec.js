const averageAge = require("../src/03");

describe('Requisito 03', () => {
  it('Deve retornar o valor correto.', () => {
    const expected = 43;
    expect(averageAge()).toEqual(expected);
  })
})