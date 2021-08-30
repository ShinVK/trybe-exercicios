function ehPal (word) {
  const space = '';
  let newArrayWord = [];
  let arrayWordTest = word.split(space);

  for(let index = arrayWordTest.length -1 ; index >= 0 ; index -= 1) {
    newArrayWord.push(arrayWordTest[index]);
  }
  let newWord = newArrayWord.join('');
  let wordIns = word.toUpperCase();
  let newWordIns = newWord.toUpperCase();
  
  if (wordIns === newWordIns) {
    console.log(wordIns + ' Essa palavra é um palíndromo');
  } else {
    console.log(newWordIns + ' Essa palavra não é um palíndromo');
  }
}

ehPal('ararA');