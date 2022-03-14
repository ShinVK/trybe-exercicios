function exec1(par1, par2, par3) {
  return new Promise((resolve, reject) => {
    if (typeof par1 !== 'number' || typeof par2 !== 'number' || typeof par3 !== 'number') reject('Informe apenas números');

    const resultado = (par1 + par2) * par3;
    if (resultado < 50) {return reject('valor muito baixo')};

    resolve(resultado);
  })
}

exec1(15, 2, 3)
  .then(result => console.log(result))
  .catch(err => console.log(err));
