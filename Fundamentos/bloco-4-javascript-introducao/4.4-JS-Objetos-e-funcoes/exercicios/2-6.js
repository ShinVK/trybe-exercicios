function summation(n) {
  let sumPlus = 0;
  for(let index = 1; index <= n; index += 1) {
    sumPlus += index;
  }
  return sumPlus
}

let somatoria = summation(8);
console.log(somatoria);

