const randomBetween = (a, b) => {
  return Math.floor(Math.random() * (b - a + 1) + a);
};

const getWarriorDamage = (warrior) => {
  const { strength, weaponDmg } = warrior;
  const damage = randomBetween(strength, strength * weaponDmg);

  warrior.damage = damage;
  return damage;
};

const getDragonDamage = (dragon) => {
  const { strength } = dragon;
  const damage = randomBetween(15, strength);

  dragon.damage = damage;
  return damage;
};

const getMageDamage = (mage) => {
  const hasMana = mage.mana >= 15;
  const { intelligence } = mage;

  const result = {
    damage: hasMana
      ? randomBetween(intelligence, intelligence * 2)
      : 'Não possui mana o suficiente',
    mana: hasMana ? 15 : 0,
  };

  (mage.damage = result.damage), (mage.mana -= result.mana);

  return result;
};

const removeHealth = (from, howMuch) => {
  from.healthPoints -= howMuch;
};

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const gameActions = {
  warriorTurn: (damageGenerator) => {
    const warriorDamage = damageGenerator(warrior);
    removeHealth(dragon, warriorDamage);
  },

  mageTurn: (damageGenerator) => {
    const mageDamage = damageGenerator(mage);
    if (typeof mageDamage.damage !== 'string') {
      removeHealth(dragon, mageDamage.damage);
    }
  },

  dragonTurn: (damageGenerator) => {
    const dragonDamage = damageGenerator(dragon);
    removeHealth(warrior, dragonDamage);
    removeHealth(mage, dragonDamage);
  },

  endRound: () => console.log(battleMembers),
};

gameActions.warriorTurn(getWarriorDamage);
gameActions.mageTurn(getMageDamage);
gameActions.dragonTurn(getDragonDamage);
gameActions.endRound();
