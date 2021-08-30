

function maiorNumero (arrayNum) {
let bigNumber = 0
for(index = 0; index < arrayNum.length ; index += 1) {
  let numAtual = arrayNum[index];
  if(numAtual >= bigNumber) {
    bigNumber = numAtual;} 
}
return arrayNum.indexOf(bigNumber);
}

let arrayNum = [2, 3, 6, 7, 10, 1, 25];
let BiggestNumber = maiorNumero (arrayNum);
console.log(BiggestNumber);