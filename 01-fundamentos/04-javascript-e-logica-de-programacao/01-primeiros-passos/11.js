const grossSalary = 3000;

let INSS = 0;

if(grossSalary > 5_189.82){
  INSS = 570.88
}else if(grossSalary > 2_594.93){
  INSS = grossSalary * 0.11
}else if(grossSalary > 1_556.95){
  INSS = grossSalary * 0.9
}else{
  INSS = grossSalary * 0.8;
}

const baseSalary = grossSalary - INSS;

let IR = 0;

if(baseSalary > 4_664.68){
  IR = (baseSalary * 0.275) - 869.36;
}else if(baseSalary > 3_751.06){
  IR = (baseSalary * 0.225) -  636.13;
}else if(baseSalary > 2_826.66){
  IR = (baseSalary * 0.15) - 354.80
}else if(baseSalary > 1_903.99){
  IR = (baseSalary * 0.075) - 142.80;
}

console.log(`R$${baseSalary - IR}`);