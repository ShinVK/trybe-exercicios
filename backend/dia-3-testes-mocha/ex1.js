class VerificaNumero{
  constructor(num) {
    this.num = num;
  }

  verifica() {
    if (this.num === 0) return 'neutro';
    if (this.num >  0) return 'positivo';
    if (this.num <  0) return 'negativo';

  }
}

module.exports = VerificaNumero;