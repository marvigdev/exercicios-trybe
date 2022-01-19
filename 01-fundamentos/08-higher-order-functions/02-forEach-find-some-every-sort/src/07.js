const books = require('./books');

function authorUnique() {
  let birthCount = {};

  books.forEach((book) => {
    const { birthYear } = book.author;

    if (!birthCount[birthYear]) birthCount[birthYear] = 0;
    birthCount[birthYear]++;
  });

  return Object.values(birthCount).every((count) => count <= 1);
}

module.exports = authorUnique;
