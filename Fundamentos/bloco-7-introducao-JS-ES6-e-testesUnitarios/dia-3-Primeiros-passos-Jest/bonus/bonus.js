const { TestWatcher } = require("@jest/core");

// Dados
const professionalBoard = [
  {
    id: "8579-6",
    firstName: "Ana",
    lastName: "Gates",
    specialities: ["UX", "Design"],
  },
  {
    id: "5569-4",
    firstName: "George",
    lastName: "Jobs",
    specialities: ["Frontend", "Redux", "React", "CSS"],
  },
  {
    id: "4456-4",
    firstName: "Leila",
    lastName: "Zuckerberg",
    specialities: ["Context API", "RTL", "Bootstrap"],
  },
  {
    id: "1256-4",
    firstName: "Linda",
    lastName: "Bezos",
    specialities: ["Hooks", "Context API", "Tailwind CSS"],
  },
  {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"],
  },
  {
    id: "4678-2",
    firstName: "Paul",
    lastName: "Dodds",
    specialities: ["Backend"],
  },
];

// objetivo
// Considere os dados abaixo. Você deve criar uma função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele ( firstName , lastName , specialities ). Você também deverá criar os testes para essa função. Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada. Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada" . Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível" .

// INPUT - ID, INFORMACAO DISPONIVEL
// OUTPUT - RESULTADOS DA INFORMAÇAO DE ACORDO COM ID, ID NÃO EXISTE - ID NÃO IDENTIFICADA, INFORMACAO NÃO EXISTIR - INFORMAÇÃO INDISPONÍVEL

// O que eu tenho que fazer?
// 1º ver se o Id recebido existe no objeto. - caso exista retornar o detail, caso não exista retoranar id não identificada

// const arrProfBoard = Object.keys(professionalBoard);
// // Pesquisa

const searchEmployee = (id, detail) => {
  //   // Implemente seu código aqui
  for (let i = 0; i < professionalBoard.length; i += 1) {
    for (i2 in professionalBoard[i]) {
      const idCorrect = professionalBoard[i];
      if (idCorrect[i2] === id) {
        if (idCorrect[detail]) return idCorrect[detail];
        else {
          throw new Error("Informação indisponível");
        }
      }
    }
  }
  throw new Error("ID não identificada");
};

// // 1. Ver se o id existe no objeto, utilizando for in e indexOf
// const arrProfBoard = professionalBoard[0];
// console.log(Object.values(arrProfBoard)[0]);  - retorna id value, se for key retorna a key id

module.exports = searchEmployee;
