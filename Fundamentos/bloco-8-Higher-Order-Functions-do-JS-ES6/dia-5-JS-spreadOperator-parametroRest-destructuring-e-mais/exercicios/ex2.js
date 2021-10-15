// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

// escreva sum abaixo
function sum(...arr) {
  return arr.reduce((acc, el) => acc + el, 0);
}

const numbers = [1, 4, 3, 67, 4, 3, 1, 77];
console.log(sum(...numbers));
