const repeatCount = (array) => {
  let counter = {};

  for (let value of array) {
    if (!counter[value]) counter[value] = 0;
    counter[value] += 1;
  }

  const entries = Object.entries(counter);
  let biggest = entries[0][0];

  for (let entry of entries) {
    if (entry[1] > counter[biggest]) biggest = entry[0];
  }

  return biggest;
};

console.log(repeatCount([2, 3, 3, 5, 8, 2, 3]));
