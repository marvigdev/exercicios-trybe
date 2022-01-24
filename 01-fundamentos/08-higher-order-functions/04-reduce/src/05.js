const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, act) => {
    let count = 0;
    for(let letter of act.toLowerCase().split('')){
      if(letter === 'a') count++;
    }

    return acc + count;
  }, 0);
}

module.exports = containsA;