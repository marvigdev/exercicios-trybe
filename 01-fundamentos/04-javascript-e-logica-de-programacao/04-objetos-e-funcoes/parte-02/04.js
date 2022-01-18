const biggestName = (array) => {
  let biggest = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > biggest.length) biggest = array[i];
  }
  return biggest;
};

console.log(
  biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
);
