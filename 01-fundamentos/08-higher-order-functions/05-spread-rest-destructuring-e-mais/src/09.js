const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

function spreadSeasons() {
  const { spring, summer, autumn, winter } = yearSeasons;
  return [...spring, ...summer, ...autumn, ...winter];
}

module.exports = spreadSeasons;
