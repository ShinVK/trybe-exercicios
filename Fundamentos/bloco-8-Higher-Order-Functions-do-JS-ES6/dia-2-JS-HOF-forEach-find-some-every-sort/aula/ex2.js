// exemplo aula
// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven);

// console.log(isEven); // 30

// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2); // 30

const numbers2 = [19, 21, 35, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  // Adiciona seu código aqui
  return number % 3 === 0 && number % 5 === 0;
};

const findDivisibleBy3And52 = numbers2.find(
  (number) => number % 3 === 0 && number % 5 === 0
);

console.log(findDivisibleBy3And52);
console.log(numbers2.find(findDivisibleBy3And5));

// proximo exercicios
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (namae) => {
  // Adicione seu código aqui:
  return namae.length === 5;
};

const test = names.find(findNameWithFiveLetters);

console.log(test);

// ex4

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find((element) => {
    return element.id === id;
  });
}

// console.log(musicas[0].id);
console.log(findMusic('31031685'));
