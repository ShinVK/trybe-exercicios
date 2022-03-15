const fs = require('fs').promises;

async function filteredArr(arr) {
  try {
    const res = await fs.readFile('./simpsons.json', 'utf-8');
    const date = JSON.parse(res);
    const filtered = date.filter(({id}) => arr.includes(id));
    await fs.writeFile('./simpsons3.json', JSON.stringify(filtered, '', 2));
  } catch(e) {
    console.error(e);
  }
}

filteredArr(['1','2','3', '4']);