const getNamedBook = require('../src/03');

describe('03 - Encontrar o primeiro livro cujo nome possui 26 caracteres.', () => {
  const expected = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };

  it('Deve retornar o livro correto', () => {
    expect(getNamedBook()).toEqual(expected);
  });
});
