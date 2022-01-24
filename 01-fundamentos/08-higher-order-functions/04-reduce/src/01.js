const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, actual) => {
    for(let el of actual){
      acc.push(el);
    }

    return acc;
  }, [])
}

module.exports = flatten;