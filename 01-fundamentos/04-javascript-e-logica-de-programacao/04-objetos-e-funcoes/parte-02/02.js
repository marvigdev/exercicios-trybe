const biggestIndex = (array) => {
  let index = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > array[index]) index = i;
  }

  return index;
};

console.log(biggestIndex([1, 2, 3, 4, 5, 1]));
