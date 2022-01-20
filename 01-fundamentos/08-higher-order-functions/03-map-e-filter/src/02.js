const books = require('./books');

function nameAndAge() {
  const filtered = books.map((book) => {
    const age = book.releaseYear - book.author.birthYear;

    return {
      age,
      author: book.author.name,
    };
  });

  return filtered.sort((a, b) => a.age - b.age);
}

module.exports = nameAndAge;
