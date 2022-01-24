const books = require("./books");

function reduceNames(){
  return books.reduce((acc, act) => {
    acc.push(act.author.name);
    return acc;
  }, []).join(', ') + '.';
}

module.exports = reduceNames;