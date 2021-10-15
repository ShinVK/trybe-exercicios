// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const isEqual = (num1, numGen) => num1 === numGen;

const hofTest = (numApost, callback) => {
  const randomNumber = Math.round(Math.random() * (5 - 1) + 1);
  return callback(numApost, randomNumber)
    ? `${randomNumber} You WIn`
    : `${randomNumber} You lose`;
};

console.log(hofTest(3, isEqual));
