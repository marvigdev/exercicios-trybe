const books = require('./books');

function oldBooksOrdered() {
  const actualYear = new Date().getFullYear();
  const sixtyYearsAgo = actualYear - 60;

  const filtered = books.filter((book) => book.releaseYear < sixtyYearsAgo);

  return filtered.sort((a, b) => a.releaseYear - b.releaseYear);
}

module.exports = oldBooksOrdered;
