const books = require("./books");

function averageAge(){
  const sumOfTheAges = books.reduce((acc, act) => {
    return acc + (act.releaseYear - act.author.birthYear);
  }, 0);

  return sumOfTheAges / books.length;
}

module.exports = averageAge;