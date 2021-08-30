
function menorNumero (arrayNum) {
  let smallNumber = 1000
  for(index = 0; index < arrayNum.length ; index += 1) {
    let numAtual = arrayNum[index];
    if(numAtual <= smallNumber) {
      smallNumber = numAtual;} 
  }
  return arrayNum.indexOf(smallNumber);
  }
  
  let arrayNum = [2, 3, 6, 7, 10, 1, 25];
  let smallestNumber = menorNumero (arrayNum);
  console.log(smallestNumber);