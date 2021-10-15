const teste = 'Vicitiori';

const teste2 = teste
  .split('')
  .reduce((qtde, letra) => (letra === 'i' ? qtde + 1 : qtde + 0), 0);

console.log(teste2);
