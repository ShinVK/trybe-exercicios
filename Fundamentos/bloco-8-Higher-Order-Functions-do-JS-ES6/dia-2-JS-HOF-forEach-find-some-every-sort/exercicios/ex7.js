const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
// Adicione o código do exercício aqui:
const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  return books.every(
    (book) =>
      !books.some(
        (book2) =>
          book2.author.birthYear === book.author.birthYear &&
          book2.author.name !== book.author.name
      )
  );
}

// o primeiro every vai verificar de acordo com o parâmetro passado
// O parâmetro passado para o primeiro every é o some book.some, como funciona um book every - testa se todos os elementos do array passam pelo teste implementado pela função fornecida., Na verdade o primeiro parâmetro passado é o book, o argumento é o book.some que é uma outra função
// books.every((par1) => argumento(book.some) )
// Para ver se o parâmetro passa pelo argumento ele precisa iterar várias vezes até receber o resultado final - true ou false, true se passar de todos argumentos e false se falhar em algum.
// Para passar em todos argumentos ele precisa que toda iteração do argumento bookSome de true para ser false.
// Esquece tudo que escrevi acima;
//
//BASICAMENTE É PARA SER VERDADEIRO A CONDIÇÃO DO EVERY, NINGUÉM PODE TER NASCIDO NO MESMO ANO. Por isso utiliza o every. Ou seja se tiver alguém que nasceu no mesmo ano precisa retornar false. Mas a condição inicial dessa função retorna verdadeiro se todos requisitos forem cumpridos. E qual o requisito? é que não tenha ninguem que nasceu no mesmo ano.
// portanto se tiver alguém que nasceu no mesmo ano retorna false.
// se não tiver ninguem que tenha nascido no mesmo ano - retorna true.
// a função escrita ta dizendo:
//
//

assert.strictEqual(authorUnique(), expectedResult);
