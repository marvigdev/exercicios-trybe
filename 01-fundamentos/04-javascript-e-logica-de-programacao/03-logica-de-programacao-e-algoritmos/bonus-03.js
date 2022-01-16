const n = 10;

for(let i = 1; i <= n; i += 1){
  console.log(' '.repeat(n - i) + '*'.repeat(i));
}