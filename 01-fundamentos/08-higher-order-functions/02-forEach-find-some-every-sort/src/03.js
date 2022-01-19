const books = require('./books');

function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}

module.exports = getNamedBook;
