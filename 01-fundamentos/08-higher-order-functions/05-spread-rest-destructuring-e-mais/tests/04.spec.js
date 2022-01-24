const filterPeople = require('../src/04');

describe('Requisito 04', () => {
  it('Deve retornar a lista correta', () => {
    const expected = [
      {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
      },
      {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
      },
      {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
      },
    ];

    expect(filterPeople()).toEqual(expected);
  });
});
