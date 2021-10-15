// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 32 47 50 52 47 103
//   return result + number;
// };

// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers); // 113

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
};
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113
// Foi adicionado o 0 ao array numbers;

const numbers2 = [32, 15, 3, 2, -5, 56, 10];

const getSum2 = (result, number) => {
  console.log(result); // 10 32 47 50 52 47 103
  return result + number;
};
const sumNumbers2 = numbers2.reduce(getSum2, 10); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers2); // 123
// Agora adicionou 10 ao numbers2, a som ficou 123, na verdade voce não adiciona ao numbers2, voce adiciona esse valor ao result, ele inicia com 10, o mesmo caso com 0;
