const { expect } = require('chai');
const sinon = require('sinon');
const Escreve = require('../ex2');
const fs = require('fs');

describe('Verifica se a função corresponde ao esperado', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it('verifica se o o conteúdo é escrito é uma string', () => {
    const resposta = new Escreve('arquivo.txt', '#vqv conteúdo');
    // console.log(resposta);
    expect(resposta.assunto).to.be.a('string');
  });
  it('Após a escrita, deve retornar um ok', () => {
    const resposta = new Escreve('arquivo.txt', '#vqv conteúdo');
    expect(resposta.writeV()).equals('ok');
  });
})

