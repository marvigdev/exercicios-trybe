const studentAverage = require("../src/06");

describe('Requisito 06', () => {
  it('Deve retornar o valor correto.', () => {
    const expected = [
      { name: 'Pedro Henrique', average: 7.8 },
      { name: 'Miguel', average: 9.2 },
      { name: 'Maria Clara', average: 8.8 },
    ];
    expect(studentAverage()).toEqual(expected);
  })
})