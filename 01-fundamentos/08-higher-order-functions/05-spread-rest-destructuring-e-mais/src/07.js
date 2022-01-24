function shipLength({ name, length, measurementUnit }) {
  return `${name} is ${length} ${measurementUnit} long`;
}

module.exports = shipLength;
