const formatedBookNames = require('../src/01');

const expected = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

describe('01 - Retornar um array de strings com o formato NOME - GENERO - AUTOR', () => {
  it('Deve retornar o array esperado', () => {
    expect(formatedBookNames()).toEqual(expected);
  });
});
