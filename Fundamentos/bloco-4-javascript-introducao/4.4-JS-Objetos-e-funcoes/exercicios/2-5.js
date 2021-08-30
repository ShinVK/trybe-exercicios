let arrNum = [2, 3, 2, 5, 8, 2, 3];
let count = 0;
let numeroRepetido = 0;

for (let i = 0; i < arrNum.length; i += 1) {
  let actNumber = arrNum[i];
  for (let i2 = 0 ; i2 < arrNum.length; i2 += 1) {

    if (actNumber === arrNum[i2]) {
      count += 1
    }
    
  }
  if (count > numeroRepetido) {
    numeroRepetido = count;
    indexOfRepNumber = i;
  } else {numeroRepetido = numeroRepetido};
  count = 0;
}
console.log(arrNum[indexOfRepNumber]);