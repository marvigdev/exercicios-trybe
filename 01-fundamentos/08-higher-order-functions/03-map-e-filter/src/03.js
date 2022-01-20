const books = require('./books');

function fantasyOrScienceFiction() {
  return books.filter(
    (book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
  );
}

module.exports = fantasyOrScienceFiction;
