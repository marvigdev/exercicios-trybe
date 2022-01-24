const reduceNames = require("../src/02");

describe('Requisito 02', () => {
  it('Deve retornar a string correta.', () => {
    const expected = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
    expect(reduceNames()).toEqual(expected);
  })
})