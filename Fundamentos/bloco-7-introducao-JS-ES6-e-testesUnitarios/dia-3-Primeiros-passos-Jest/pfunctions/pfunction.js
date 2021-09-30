// Desafio 9
function letterToNumber(actLett) {
  let objectRef = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  for (let key in objectRef) {
    if (key === actLett) {
      let newNumber = objectRef[key];
      actLett = newNumber;
      break;
    }
  }
  return actLett;
}

function encode(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    let actLett = str[i];
    newStr += letterToNumber(actLett);
  }
  return newStr;
}

function numberToLetter(actLett) {
  let objectRef = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  for (let key in objectRef) {
    if (objectRef[key].toString() === actLett) {
      let newLett = key;
      actLett = newLett;
      break;
    }
  }
  return actLett;
}

function decode(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    let actLett = str[i];
    newStr += numberToLetter(actLett);
  }
  return newStr;
}

module.exports = { encode, decode };
