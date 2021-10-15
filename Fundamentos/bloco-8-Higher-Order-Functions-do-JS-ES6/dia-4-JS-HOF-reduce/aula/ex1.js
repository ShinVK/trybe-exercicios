const numbers = [50, 85, -30, 3, 15];

// retornar o maior valor utilizando o for

let biggestNumber = 0;

for (let i in numbers) {
  if (numbers[i] > biggestNumber) {
    biggestNumber = numbers[i];
  }
}
console.log(biggestNumber);

// retornando o maior valor utilizando Reduce

// reduce recebe dois valores o acumulador e a array;

const biggestNumber2 = numbers.reduce((biggestNumber, number) =>
  number > biggestNumber ? number : biggestNumber
);

console.log(biggestNumber2);
