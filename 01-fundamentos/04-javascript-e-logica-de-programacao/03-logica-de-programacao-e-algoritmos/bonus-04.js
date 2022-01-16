const n = 11;

if(!(n%2)) return console.log('não é possível fazer uma pirâmide perfeita!')

let padding = Math.floor(n/2);
while(padding > -1){
  let result = '';

  for(let i = 0; i < n; i += 1){
    if(i < padding || i >= n - padding){
      result += ' '
    }else{
      result += '*'
    }
  }

  console.log(result);
  padding -= 1;
}