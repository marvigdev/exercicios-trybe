const authorWith3DotsOnName = require('../src/07');

const expected = 'O Senhor dos Anéis';

describe('Retornar o nome do livro escrito pela pessoa cujo nome inicia com três iniciais', () => {
  it('Deve retornar livro de "J. R. R. Tolkien"', () => {
    expect(authorWith3DotsOnName()).toEqual(expected);
  });
});
