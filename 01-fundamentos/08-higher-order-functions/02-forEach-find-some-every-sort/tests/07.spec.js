const authorUnique = require('../src/07');

describe('07 - Verificar se não existe dois ou mais autores que nasceram no mesmo ano', () => {
  const expected = false;

  it('Deve retornar falso', () => {
    expect(authorUnique()).toEqual(expected);
  });
});
