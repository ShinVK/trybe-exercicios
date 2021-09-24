const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const lastOdd = oddsAndEvens.length;
const oddsOrd = [];
// Seu código aqui.

// se menor passa pra frente, comparação entre dois números
// numero atual e próximo numero
// fazer um for pra pegar o menor número de todos na array
// colocar esse número na outra Array
// remover esse número da array (split)
// function menorN() {
//   for (let i = 0; i < lastOdd; i += 1) {
//     let menorNumero = 1000;
//     for (let i = 0; i < lastOdd; i += 1) {
//       let actNum = oddsAndEvens[i];
//       if (actNum < menorNumero) {
//         menorNumero = actNum;
//       }
//     }
//     const i2 = oddsAndEvens.indexOf(menorNumero);
//     oddsAndEvens.splice(i2, 1);
//     oddsOrd.push(menorNumero);
//   }
// }

// menorN();

// console.log(`Os números ${oddsOrd} se encontram ordenados de forma crescente`); // será necessário alterar essa linha 😉

// REFATORAÇÃO
// const xTest = (z, i) => (oddsAndEvens[i] < z ? oddsAndEvens[i] : z);
// const smlNum = (x) => {
//   for (let i = 0; i < lastOdd; i += 1) {
//     x = xTest(x, i);
//   }
//   return x;
// };

// function menorN() {
//   for (let i = 0; i < lastOdd; i += 1) {
//     let menorNumero = 1000;
//     const i2 = oddsAndEvens.indexOf(smlNum(menorNumero));
//     oddsOrd.push(smlNum(menorNumero));
//     oddsAndEvens.splice(i2, 1);
//   }
// }

// menorN();

// console.log(`Os números ${oddsOrd} se encontram ordenados de forma crescente`);

const xTest = (z, i) => (oddsAndEvens[i] < z ? oddsAndEvens[i] : z);

// REFATORAÇÃO
const smlNum = (x) => {
  for (let i = 0; i < lastOdd; i += 1) {
    x = xTest(x, i);
  }
  return x;
};

const spiceNPush = (s) => {
  const i2 = oddsAndEvens.indexOf(smlNum(s));
  oddsOrd.push(smlNum(s));
  oddsAndEvens.splice(i2, 1);
};

function menorN() {
  for (let i = 0; i < lastOdd; i += 1) {
    let menorNumero = 1000;
    spiceNPush(menorNumero);
  }
}

menorN();

console.log(`Os números ${oddsOrd} se encontram ordenados de forma crescente`);
