const matches = (a, b) => a === b;

const prize = (selectedNumber, matcher) => {
  const prizeAnswer = Math.floor(Math.random() * (5 - 1 + 1) + 1);

  if (matcher(prizeAnswer, selectedNumber)) {
    console.log(`Parabéns! Você ganhou.`);
  } else {
    console.log(`Tente novamente.`);
  }
};

console.log(prize(5, matches));
