const n = 50;

let primes = [2]

primeHandler:
for(let i = 3; i <= n; i += 1){
  for(let j = 2; j < i; j += 1){
    if(!(i%j)) continue primeHandler;
  }

  primes.push(i);
}

console.log(primes);