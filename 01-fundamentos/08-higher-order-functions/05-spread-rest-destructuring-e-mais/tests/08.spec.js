const greet = require('../src/08');

describe('Requisito 08', () => {
  it('Deve retornar a string correta', () => {
    expect(greet('John')).toEqual('Hi John');
    expect(greet('John', 'Good morning')).toEqual('Good morning John');
    expect(greet('Isabela', 'Oi')).toEqual('Oi Isabela');
  });
});
