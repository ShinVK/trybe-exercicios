const { expect } = require('chai');

const numb = require('../ex1');

describe('Verifica o número', () => {
  it('maior que 0 - positivo', () => {
    const resposta = new numb(5).verifica();

    expect(resposta).equals('positivo');
  });
  it('menor que 0 - negativo', () => {
    const resposta = new numb(-5).verifica();

    expect(resposta).equals('negativo');
  });
  it('igual a 0 - neutro', () => {
    const resposta = new numb(0).verifica();

    expect(resposta).equals('neutro');
  });
});

describe('Verifica se é número', () => {
  it('é numero, return true', () => {
    const resposta = new numb(5).isNumber();

    expect(resposta).equals(true);
  });
  it('string - é uma string?', () => {
    const resposta = new numb('5').isNumber();

    expect(resposta).to.be.a('string');
  });

  it('Resposta caso seja string: o parâmetro deve ser um número', () => {
    const resposta = new numb('5').isNumber();

    expect(resposta).equals('o parâmetro deve ser um número');
  });
});