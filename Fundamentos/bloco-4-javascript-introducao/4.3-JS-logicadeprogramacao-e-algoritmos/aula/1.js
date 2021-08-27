let fruits = [3, 4, 1, 1, 1];
let numFruits = 0;

for (let index = 0; index < fruits.length; index += 1) {


  numFruits += fruits[index];
  
  
}

if (numFruits > 15) {
  console.log(`${numFruits}`);
  
} else {
  console.log(`Valor menor que 16`);
}
