const cost = 50;
const sell = 70;

if(cost < 0 || sell < 0) return console.log('invalid prices!');

const totalCosts = cost + (cost * 0.2);
const profit = sell - totalCosts;

console.log(`total profit: ${profit}`);