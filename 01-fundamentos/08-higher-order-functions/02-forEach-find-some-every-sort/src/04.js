const books = require('./books');

function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}

module.exports = booksOrderedByReleaseYearDesc;
