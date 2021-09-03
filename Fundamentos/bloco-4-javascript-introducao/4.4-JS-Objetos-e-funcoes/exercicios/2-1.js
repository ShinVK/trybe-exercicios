

const wordTest = 'Avestruz';
const space = '';


let arrayWordTest = wordTest.split(space);


let newArrayWord = [];


for(let index = arrayWordTest.length -1 ; index >= 0 ; index -= 1) {
  newArrayWord.push(arrayWordTest[index]);

}
let newWord = newArrayWord.join('');

let wordIns = wordTest.toUpperCase();
let newWordIns = newWord.toUpperCase();

if (wordIns === newWordIns) {
  console.log(wordIns + ' Essa palavra é um palíndromo');
} else {
  console.log(newWordIns + ' Essa palavra não é um palíndromo');
}



