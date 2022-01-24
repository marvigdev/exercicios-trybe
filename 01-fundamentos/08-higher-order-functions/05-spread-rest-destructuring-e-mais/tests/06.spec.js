const toObject = require('../src/06');

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
const cars = [palio, shelbyCobra, chiron];

describe('Requisito 06', () => {
  test.each(cars)(
    'Carro %p deve retornar o objeto correto',
    (modelo, marca, ano) => {
      const expected = {
        modelo,
        marca,
        ano,
      };
      expect(toObject([modelo, marca, ano])).toEqual(expected);
    }
  );
});
