let array = ['java', 'javascript', 'python', 'html', 'css'];

let smallest = array[0];
let biggest = array[0];

for(let i = 0; i < array.length; i += 1){
  if(array[i].length < smallest.length) smallest = array[i];
  if(array[i].length > biggest.length) biggest = array[i]; 
}

console.log(smallest);
console.log(biggest);
