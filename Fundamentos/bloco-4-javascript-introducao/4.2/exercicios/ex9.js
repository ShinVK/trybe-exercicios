let meuArray = [];
let meuArray2 = [];
let number2 = 0;


for (let index = 1; index <=25; index += 1) {

  meuArray.push(index);


}

for (let index = 0; index < meuArray.length ; index += 1) {
  number2 = meuArray[index] / 2; 
 
 meuArray2.push(number2);

}

console.log(meuArray);
console.log(meuArray2);




