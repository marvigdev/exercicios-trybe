const n = 10;

let result = n;
for(let i = n - 1; i > 0; i -= 1){
  result *= i;
}

console.log(result);