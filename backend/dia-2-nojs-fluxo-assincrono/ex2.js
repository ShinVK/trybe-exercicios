const ex1 = require('./ex1');

ex1(15, 2, 3)
  .then(result => console.log(result))
  .catch(err => console.log(err));

// const n1 = Math.floor(Math.random() * 100 + 1);
// const n2 = Math.floor(Math.random() * 100 + 1);
// const n3 = Math.floor(Math.random() * 100 + 1);

// console.log(n1, n2, n3);

// ex1(n1, n2, n3)
// .then(result => console.log(result))
// .catch(err => console.log(err));

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function exec2() {
  const randNumber = Array.from({length: 3}).map(randomNumber);
  try {
    const result = await ex1(...randNumber)
    console.log(result);
  } catch(err) {
    console.log(err);
  }
  // .then(result => console.log(result))
  // .catch(err => console.log(err));
}

exec2();