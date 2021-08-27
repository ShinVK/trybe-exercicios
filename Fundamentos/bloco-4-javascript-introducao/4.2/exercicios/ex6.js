let numbers = [4, 9, 2, 18, 70, 8, 100, 2, 36, 28];
let contadorImpar = 0;


for (let index = 0; index < numbers.length; index +=1) {
  numAtual = numbers[index]

  if (numAtual % 2 !== 0) {
    
    contadorImpar +=1;
    
  }
  
}

if (contadorImpar > 0) {
  console.log("Existem " + contadorImpar + " números ímpares");
} else {
  console.log("Não existem números ímpares");
}

