const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const evaluator = (answerList, studentAnswers) => {
  let points = 0;

  for (let index in answerList) {
    if (studentAnswers[index] === 'N.A') continue;
    else if (studentAnswers[index] === answerList[index]) points++;
    else points -= 0.5;
  }

  return points;
};

const studentPoints = (answerList, studentAnswers, evaluator) => {
  const userPoints = evaluator(answerList, studentAnswers);
  return userPoints;
};

console.log(studentPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, evaluator));
