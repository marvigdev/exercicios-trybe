let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = []

for(let i = 0; i < numbers.length; i += 1){
  if(numbers[i+1]){
    result.push(numbers[i] * numbers[i+1])
  }else{
    result.push(numbers[i] * 2);
  }
}

console.log(result)