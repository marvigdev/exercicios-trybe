const books = require('./books');

function someBookWasReleaseOnThe80s() {
  return books.some(
    (book) => book.releaseYear >= 1980 && book.releaseYear < 1990
  );
}

module.exports = someBookWasReleaseOnThe80s;
