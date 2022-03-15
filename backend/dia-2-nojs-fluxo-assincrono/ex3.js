const fs = require('fs').promises;

// fs.readFile('./simpsons.json', 'utf-8')
// .then((res) => JSON.parse(res))
// .then(res2 => {
//   res2.map(({id, name}) => console.log(
//     id + ' ' + '- ' + name
//   ))
// });

async function verifyId(idPer) {
    const result = await fs.readFile('./simpsons.json', 'utf-8')
      .then(dados => JSON.parse(dados));
    const exist = result.some((pers) => pers.id == idPer);
    if(exist) {
      const results = result.filter(({id}) => id == idPer);
      console.log(results);
    } else {
      console.error('id não encontrado');
    }

}

verifyId(1);