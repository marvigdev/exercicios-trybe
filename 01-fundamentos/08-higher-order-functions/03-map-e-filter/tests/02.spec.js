const nameAndAge = require('../src/02');

const expected = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

describe('02 - Retornar array com apenas idade e nome do autor quando seu livro foi lançado.', () => {
  it('Deve retornar o array esperado', () => {
    expect(nameAndAge()).toEqual(expected);
  });
});
