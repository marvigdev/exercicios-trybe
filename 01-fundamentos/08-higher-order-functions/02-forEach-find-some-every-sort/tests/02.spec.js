const smallerName = require('../src/02');

describe('02 - Retornar o nome do livro de menor nome.', () => {
  const expected = 'Duna';

  it('Deve retornar o nome correto', () => {
    expect(smallerName()).toEqual(expected);
  });
});
