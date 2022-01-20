const fantasyOrScienceFictionAuthors = require('../src/05');

const expected = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

describe('05 - Retornar um array com os autores de livros de ficção científica ou fantasia', () => {
  it('Deve retornar o array esperado', () => {
    expect(fantasyOrScienceFictionAuthors()).toEqual(expected);
  });
});
