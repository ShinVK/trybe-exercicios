// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudaçã

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [ola, saudacao] = saudacoes;
saudacao(ola);
