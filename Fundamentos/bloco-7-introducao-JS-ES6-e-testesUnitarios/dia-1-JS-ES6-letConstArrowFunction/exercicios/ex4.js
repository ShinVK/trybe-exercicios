// Crie uma função que receba uma frase e retorne qual a maior palavra;

// input: frase, output: palavra
// transformar string em array, e comparar entre todas as palavras, length
// primeiro transformar a string em array string.split

const longestWord = (frase) => {
  const arrFrase = frase.split(" ");
  let maiorPalavra = "";
  for (let i = 0; i < arrFrase.length; i += 1) {
    const palAtual = arrFrase[i];
    maiorPalavra =
      palAtual.length > maiorPalavra.length ? arrFrase[i] : maiorPalavra;
  }
  return maiorPalavra;
};

console.log(
  longestWord("Antonio foi no banheiro e não sabemos o que aconteceu")
);

// refatoracao teste
// nesse caso ele faz tipo um for pra ir fac num - 1
// const fac = (num) => (num > 1 ? num * fac(num - 1) : 1);
// console.log(fac(5));

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
