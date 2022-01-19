const books = require('./books');

function everyoneWasBornOnSecXX() {
  return books.every(
    (book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000
  );
}

module.exports = everyoneWasBornOnSecXX;
