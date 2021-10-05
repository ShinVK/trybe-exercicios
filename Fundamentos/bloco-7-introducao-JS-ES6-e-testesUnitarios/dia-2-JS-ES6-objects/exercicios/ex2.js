const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - crie uma função com 3 parametros (objeto a ser modificado, chave que deverá ser adicionada e o valor dela)

const addTurn = (obj, chv, vl) => {
  obj[chv] = vl;
  // console.log(obj);
};

addTurn(lesson2, "turno", "noite");

// 2. Crie uma função para listar as keys de um objeto. Input - objeto, output - keys

const showKeys = (obj) => Object.keys(obj);

// console.log(showKeys(lesson1));

// 3. Crie uma função para mostrar o tamanho de um objeto.
// INPUT - Objeto OUTPUT - tamanho do objeto.
const objLenght = (obj) => Object.entries(obj).length;
// console.log(objLenght(lesson1));

// 4. Cire uma função para listar os valores de um Objeto.
//  INPUT - objeto OUTPUT - valores
const objVl = (obj) => Object.values(obj);
// console.log(objVl(lesson2));

// 5. Junte todas lessons em um objeto allLessons
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(Object.keys(allLessons)[0]);

// 6. Retorne o número total de estudantes all lessons
const totalStd = (obj) => {
  let total = 0;
  const arrayAll = Object.keys(obj);
  for (i in arrayAll) {
    total += obj[arrayAll[i]].numeroEstudantes;
  }
  return total;
};

console.log(totalStd(allLessons));

// 7. Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto.
// INPUTS - OBJETO E POSIÇÃO, OUTPUT - VALOR DA CHAVE
const getValueByNumber = (obj, n) => {
  const actLess = Object.values(obj);
  return actLess[n];
};

// 8. Crie uma função que verifique se o par (chave/valor) existe na função. Essa função deve possuir 3 parametros.
// INPUT-objeto, nome da chave, valor da chave
// OUPUT - boolean;

const verifyPair = (obj, chav, vlue) => {
  const actLess = Object.entries(obj);
  let bool = false;
  for (let i in actLess) {
    if (actLess[i][0] === chav && actLess[i][1] === vlue) bool = true;
  }
  return bool;
};

console.log(verifyPair(lesson2, 'professor', 'Carlos'));

