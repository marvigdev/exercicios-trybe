let word = 'banana';

let result = ''
for(let i = word.length - 1; i >= 0; i -= 1){
  result += word[i];
}

console.log(result);