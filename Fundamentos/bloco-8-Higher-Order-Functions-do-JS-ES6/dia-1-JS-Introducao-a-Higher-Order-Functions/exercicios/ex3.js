// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const testCheck = (gab, resp) => {
  let count = 0;
  for (let k in resp) {
    if (resp[k] === gab[k]) {
      count += 1;
    } else if (resp[k] === '') {
      count += 0;
    } else {
      count -= 0.5;
    }
  }
  return count;
};

const hofTest = (arrGab, arrResp, callback) => {
  return callback(arrGab, arrResp);
};

const arrGabarito = ['a', 'b', 'c', 'e', 'a', 'a', 'c', 'd', 'e', 'e'];
const arrResposta = ['c', 'd', 'c', 'e', 'a', 'c', 'c', 'c', 'e', 'e'];

console.log(hofTest(arrGabarito, arrResposta, testCheck));
