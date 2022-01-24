const containsA = require("../src/05");

describe('Requisito 05', () => {
  it('Deve retornar o valor correto.', () => {
    const expected = 20;
    expect(containsA()).toEqual(expected);
  })
})