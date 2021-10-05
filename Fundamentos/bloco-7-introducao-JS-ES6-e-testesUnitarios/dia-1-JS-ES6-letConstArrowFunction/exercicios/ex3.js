// funcao fatorial

const n = 5;

const fact = (n) => {
  let total = 1;
  for (let i = 2; i <= n; i += 1) total *= i;
  console.log(total);
};

fact(4);

const fac = (num) => (num > 1 ? num * fac(num - 1) : 1);
console.log(fac(5));

// fac(5) a condicão é verdadeira - vai chamar a primeira funcao
// 5 * fac(4)
// fac(4) - vai retornar um numero tbm, que na verdade vai ser outra funcao
// fac(4) - 4 * fac(3) - fac(3) - retorna outra funcao fac(2)
// fac(3) - 3 * fac(2) - fac(2) - retorna funcao de novo
// fac(2) - 2 * fac(1) - fac(1) - retorna 1
// assim temos:
// fac(1) - retorna 1, portanto fac(2) = 2 * 1 - retorna 2
// fac(1) = 1, fac(2) = 2, fac(3) = 3*2(fac(2)) = 6, fac(4) = 4 * 6 = 24
// entao até chegar no 1 é funcao, depois de chegar no 1 vai colocando os resultados esperados. A funcao é basicamente essa num * num - 1, porem chamando ela dentro de outra funcao, ela substitui o valor para que execute a funcao e pegue o valor total antes.
// basicamente a parte do fac(num - 1) - é o valor total do fatorial do numero anterior ao num parametro;
// seria uma forma de substituir o for.
