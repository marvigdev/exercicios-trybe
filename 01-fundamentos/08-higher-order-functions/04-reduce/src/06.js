const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function average(arr) {
  const sum = arr.reduce((acc, act) => {
    return acc + act;
  })

  return sum / arr.length;
}

function studentAverage() {
  const result = students.reduce((acc, act, index) => {
    const gradeAverage = average(grades[index]);

    acc.push({
      name: act,
      average: gradeAverage
    })

    return acc;
  }, [])

  return result;
}

module.exports = studentAverage;