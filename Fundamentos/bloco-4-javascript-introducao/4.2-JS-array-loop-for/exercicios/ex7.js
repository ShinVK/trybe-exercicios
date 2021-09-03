let numbers = [1, 5, 9, 3, 19, 70, 8, 100, 2, 500, 1000, 35, 27];
let numAtual = 0;
let menorNum = 0;
let menor = 10000000000;

for (let index = 0; index < numbers.length; index +=1) {
  numAtual = numbers[index]

  if (numAtual < menor) {
    menor = numAtual;
   
  } else if (menor < numAtual) {
    menorNum = menor
    
  }
  
}
console.log(menorNum);