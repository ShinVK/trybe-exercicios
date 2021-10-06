// Outras formas de usar o .map é unir dois arrays para criar um novo. Considere que você possui duas listas: o preço do primeiro produto ( Arroz ) é o primeiro elemento da lista prices ( 2.99 ), e assim por diante:

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const objPrd = (prodS, prices) =>
  prodS.map((product, i) => {
    return { [product]: prices[i] };
  });

const listProducts = objPrd(products, prices);
console.log(listProducts);

// nesse caso está juntando a array prodS, com o map. O map ta pegando o produto, junto com o outro parametro prices, exatamente por estar nas mesmas posições, a cada iteração vai pegar o produto 0 = arroz, e o price[0] = 2.99 e assim por diante. É como se fosse um for dentro de outro for.
