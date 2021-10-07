// some todos número pares do array

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvenNumbers = numbers.reduce((acc, number) =>
  number % 2 === 0 ? acc + number : acc + 0
);

console.log(sumEvenNumbers);

// outra forma de resolver

const evenNumber = (number) => number % 2 === 0;
const sum = (acc, number) => acc + number;

const sumEvenNumbers2 = (array) => array.filter(evenNumber).reduce(sum);

console.log(sumEvenNumbers2(numbers, 0));
