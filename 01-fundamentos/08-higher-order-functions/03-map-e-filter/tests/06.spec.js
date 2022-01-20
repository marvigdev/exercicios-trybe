const oldBooks = require('../src/06');

const expected = ['O Senhor dos Anéis', 'Fundação', 'O Chamado de Cthulhu'];

describe('06 - Retornar array com o nome dos livros com mais de 60 anos de publicação', () => {
  it('Deve retornar o array esperado', () => {
    expect(oldBooks()).toEqual(expected);
  });
});
