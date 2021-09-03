
// const space = '';
// let bigName = "";
// for (let index = 0; index < arrayNames.length; index += 1){
//  let actualName = arrayNames[index].split(space);
//  if(actualName.length > bigName.length) {
//    bigName = actualName;
   
//  }
// }
// let bigNameConc = bigName.join('');
// console.log(bigNameConc);

function biggestName () {
  const space = '';
  let bigName = [];
  for (let index = 0; index < arrayNames.length; index += 1){
    let actualName = arrayNames[index].split(space);
    if(actualName.length > bigName.length) {
      bigName = actualName;
    }}

  let bigNameConc = bigName.join('');
  return bigNameConc;
}

const arrayNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

let nomeMaior = biggestName ();
console.log(nomeMaior);