const books = require("./books");

function longestNamedBook(){
  return books.reduce((acc, act) => {
    return act.name.length > acc.name.length ? act : acc;
  });
}

module.exports = longestNamedBook;