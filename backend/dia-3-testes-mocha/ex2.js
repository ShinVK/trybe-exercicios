const fs = require('fs');

class EscreveArquivo {
  constructor(nomedoarquivo, assunto) {
    this.nomedoarquivo = nomedoarquivo;
    this.assunto = assunto;
  }

  writeV() {
    fs.writeFileSync(this.nomedoarquivo, this.assunto);
      // fs.writeFileSync(this.nomedoarquivo, this.assunto);
      return 'ok';

  }

}

// const newFile = new EscreveArquivo('teste.txt', 'oi deu certo');newFile.writeV();

module.exports =  EscreveArquivo;