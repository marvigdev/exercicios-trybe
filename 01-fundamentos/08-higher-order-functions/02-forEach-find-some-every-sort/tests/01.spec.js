const authorBornIn1947 = require('../src/01');

describe('01 - o nome da primeira pessoa autora do livro nascida no ano de 1947', () => {
  const expected = 'Stephen King';

  it('Deve retornar o autor correto', () => {
    expect(authorBornIn1947()).toEqual(expected);
  });
});
