const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});

const paresMq5Map = numeros.map((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    return numero;
  }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]
console.log(paresMq5Map);
// map sempre vai retornar o mesmo número de elementos da array original
