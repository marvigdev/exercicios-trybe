const books = require('./books');

function smallerName() {
  let smallestName = books[0].name;

  books.forEach((book) => {
    if (book.name.length < smallestName.length) {
      smallestName = book.name;
    }
  });

  return smallestName;
}

module.exports = smallerName;
