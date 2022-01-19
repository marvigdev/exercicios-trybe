const everyoneWasBornOnSecXX = require('../src/05');

describe('05 - Verificar se todos os autores nasceram no século 20', () => {
  const expected = false;

  it('Deve retornar falso', () => {
    expect(everyoneWasBornOnSecXX()).toEqual(expected);
  });
});
