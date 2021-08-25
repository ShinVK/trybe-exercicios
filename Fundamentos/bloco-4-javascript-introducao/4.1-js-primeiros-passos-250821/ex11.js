const sal = 8000;


let inss;



if (sal <= 1556.94) {
  inss = sal * 0.08;
}
else if (sal >= 1556.95 && sal <= 2594.92) {
  inss = sal * 0.09;
}
else if (sal >= 2594.93 && sal <= 5189.82) {
  inss = sal * 0.11;
}
else if (sal > 5189.82){
  inss = 570.88;
}


let salBase = sal - inss;
let ir;
if (salBase <= 1903.98) {
  ir = 0
}
else if (salBase >= 1903.99 && salBase <= 2826.65) {
  ir = (salBase * 0.075) - 142.8;
}
else if (salBase >= 2826.66 && salBase <= 3751.05) {
  ir = (salBase * 0.15) - 354.8;
}
else if (salBase >= 3751.06 && salBase <= 4664.68) {
  ir = (salBase * 0.225) - 636.13;
}
else if (salBase > 4664.68){
  ir = (salBase * 0.275) - 869.36;
}

const salLiquido = salBase - ir;
const valorDesc = sal - salLiquido;

console.log("Seu salário líquido é de R$" + salLiquido);
console.log("Foi descontado R$" + valorDesc);

