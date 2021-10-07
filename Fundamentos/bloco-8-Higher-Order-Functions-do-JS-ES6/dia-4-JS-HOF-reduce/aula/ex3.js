const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

// Map e reduce - Utilizando o array estudante do dia anterior, retorne a matéria que cada aluno foi melhor
// A dúvida é, primeiro o map ou primeiro reduce?
// Primeiro utilizamos o reduce para pegar a maior nota, e depois o map para formatar a Array
// Ou utilizamos o map e como argumento colocamos um reduce dentro?
// Acredito que é a segunda forma, a qual vou tentar primeiro

// map com reduce como argumento;
const melhorMateriaDeCadaUm = estudantes.map((estudante) => {
  const melhorMateria = estudante.materias.reduce((bestMat, mat) =>
    bestMat > mat.nota ? bestMat : mat.nota
  );
  const materiaName = estudante.materias.find(
    (materia) => materia.nota === melhorMateria
  ).name;

  return { Name: `${estudante.nome}`, Materia: `${materiaName}` };
});

// const teste = estudantes[0].materias.reduce((bestMat, mat) =>
//   bestMat > mat.nota ? bestMat : mat.nota
// );

// const materiaName = estudantes[0].materias.find(
//   (materia) => materia.nota === teste
// );
// console.log(teste);
// console.log(materiaName);

console.log(melhorMateriaDeCadaUm);
