const fs = require('fs').promises;

const arr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function writeF(arr) {
  const files = arr.map((el, i) => {
    fs.writeFile(`./file${i}.txt`, el);
  })
  await Promise.all(files);
}

writeF(arr);