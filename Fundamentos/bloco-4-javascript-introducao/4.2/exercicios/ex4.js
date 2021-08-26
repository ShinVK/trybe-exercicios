let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let number of numbers) {
  soma += number;
}

let media = soma/numbers.length;
 
if (media > 20) {
  console.log(media);
  console.log("Valor maior que 20");
} 
else {
  console.log(media);
  console.log("Valor menor  ou igual à 20");
}