const someBookWasReleaseOnThe80s = require('../src/06');

describe('06 - Verificar se algum livro foi publicado na década de 80', () => {
  const expected = true;

  it('Deve retornar verdadeiro', () => {
    expect(someBookWasReleaseOnThe80s()).toEqual(expected);
  });
});
