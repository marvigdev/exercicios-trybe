const grade = 80;

if(grade < 0 || grade > 100) return console.log('invalid grade!');

if(grade >= 90) console.log('A');
else if(grade >= 80) console.log('B');
else if(grade >= 70) console.log('C');
else if(grade >= 60) console.log('D');
else if(grade >= 50) console.log('E');
else console.log('F');