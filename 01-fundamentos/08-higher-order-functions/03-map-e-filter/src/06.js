const books = require('./books');

function oldBooks() {
  const actualYear = new Date().getFullYear();
  const sixtyYearsAgo = actualYear - 60;

  const filtered = books.filter((book) => book.releaseYear < sixtyYearsAgo);

  return filtered.map((book) => book.name);
}

module.exports = oldBooks;
