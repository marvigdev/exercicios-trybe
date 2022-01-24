function personLikes({ name, age, likes }) {
  return `${name} is ${age} years old and likes ${likes.join(', ')}.`;
}

module.exports = personLikes;
