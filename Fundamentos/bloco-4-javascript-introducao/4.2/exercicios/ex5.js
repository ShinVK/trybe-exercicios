let numbers = [10000, 5, 9, 3, 19, 70, 8, 100, 2, 500, 1000, 35, 27];
let numAtual = 0;
let maiorNum = 0;
let maior = 0;

for (let index = 0; index < numbers.length; index +=1) {
  numAtual = numbers[index]

  if (numAtual > maior) {
    maior = numAtual;
   
  } else if (maior > numAtual) {
    maiorNum = maior
    
  }
  
}
console.log(maiorNum);

