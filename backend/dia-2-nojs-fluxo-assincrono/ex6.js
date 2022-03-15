const fs = require('fs').promises;

async function addPersonagem() {
  try {
    const file = await fs.readFile('./simpsons.json', 'utf-8');
    const json = JSON.parse(file);
  
    json.push({'id': '11', 'name': 'Nelson Muntz'});
    console.log(json);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(json, '', 2));

  } catch(e) {
    console.error(e);
  }
}

// async function filteredArr(arr) {
//   try {
//     const res = await fs.readFile('./simpsons.json', 'utf-8');
//     const date = JSON.parse(res);
//     const filtered = date.filter(({id}) => arr.includes(id));
//     await fs.writeFile('./simpsons3.json', JSON.stringify(filtered, '', 2));
//   } catch(e) {
//     console.error(e);
//   }
// }


addPersonagem();