const fs = require('fs').promises;

async function removeIds() {
  try {

    const results = await fs.readFile('./simpsons.json', 'utf-8');
    const dados = await JSON.parse(results);
    const remove = dados.filter(({id}) => id !== '10' && id !== '6');
    await fs.writeFile('./simpsons2.json', JSON.stringify(remove, '', 2));
  } catch(e) {
    console.log(e);
  }
}

removeIds();