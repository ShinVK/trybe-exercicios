const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
.then((res) => JSON.parse(res))
.then(res2 => {
  res2.map(({id, name}) => console.log(
    id + ' ' + '- ' + name
  ))
});