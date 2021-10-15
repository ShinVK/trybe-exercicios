// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((qtdeTotal, nome) => {
    return (
      qtdeTotal +
      nome
        .toLowerCase()
        .split('')
        .reduce((qtde, letra) => (letra === 'a' ? qtde + 1 : qtde + 0), 0)
    );
  }, 0);
}

console.log(containsA());
