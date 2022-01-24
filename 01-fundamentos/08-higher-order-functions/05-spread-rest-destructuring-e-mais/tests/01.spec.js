const rectangleArea = require('../src/01');

describe('Requisito 01', () => {
  it('Deve retornar os valores corretos', () => {
    const rectangle1 = [1, 2];
    const rectangle2 = [3, 5];
    const rectangle3 = [6, 9];

    expect(rectangleArea(...rectangle1)).toEqual(2);
    expect(rectangleArea(...rectangle2)).toEqual(15);
    expect(rectangleArea(...rectangle3)).toEqual(54);
  });
});
