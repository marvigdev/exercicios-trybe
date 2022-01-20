const books = require('./books');

function fantasyOrScienceFictionAuthors() {
  const filtered = books.filter(
    (book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
  );

  return filtered.map((book) => book.author.name).sort();
}

module.exports = fantasyOrScienceFictionAuthors;
