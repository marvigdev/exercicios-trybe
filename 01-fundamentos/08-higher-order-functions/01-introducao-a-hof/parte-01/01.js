const generateEmployee = (name) => {
  const sanitizedName = name.toLowerCase().replaceAll(' ', '_');

  return {
    name,
    email: `${sanitizedName}@trybe.com`,
  };
};

const newEmployees = (generator) => {
  const employees = {
    id1: generator('Pedro Guerra'),
    id2: generator('Luiza Drumond'),
    id3: generator('Carla Paiva'),
  };

  return employees;
};

console.log(newEmployees(generateEmployee));
