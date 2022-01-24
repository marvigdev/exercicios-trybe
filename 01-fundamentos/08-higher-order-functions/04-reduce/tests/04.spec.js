const longestNamedBook = require("../src/04");

describe('Requisito 04', () => {
  it('Deve retornar o objeto correto.', () => {
    const expected = {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    };
    expect(longestNamedBook()).toEqual(expected);
  })
})