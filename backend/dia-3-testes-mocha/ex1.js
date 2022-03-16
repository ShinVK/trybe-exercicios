class VerificaNumero{
  constructor(num) {
    this.num = num;
  }

  verifica() {
    if (this.num === 0) return 'neutro';
    if (this.num >  0) return 'positivo';
    if (this.num <  0) return 'negativo';
  }

  isNumber() {
    if(typeof this.num !== 'number') {
      return false;
    } else {
      return true;
    }
  }
}

// const num1 = new VerificaNumero(5);
// const num2 = new VerificaNumero('5');
// console.log(num1.isNumber());
// console.log(num2.isNumber());

module.exports = VerificaNumero;