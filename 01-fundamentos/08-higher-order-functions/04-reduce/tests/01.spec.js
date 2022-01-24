const flatten = require("../src/01")

describe('Requisito 01', () => {
  it('Deve retornar o array esperado', () => {
    const expected = ['1', '2', '3', true, 4, 5, 6]
    expect(flatten()).toEqual(expected);
  })
})