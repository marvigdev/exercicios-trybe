const books = require('./books');

function formatedBookNames() {
  return books.map(
    (book) => `${book.name} - ${book.genre} - ${book.author.name}`
  );
}

module.exports = formatedBookNames;
