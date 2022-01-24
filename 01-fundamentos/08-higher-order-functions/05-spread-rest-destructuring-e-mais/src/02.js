function sum(...values) {
  return values.reduce((prev, act) => prev + act, 0);
}

module.exports = sum;
