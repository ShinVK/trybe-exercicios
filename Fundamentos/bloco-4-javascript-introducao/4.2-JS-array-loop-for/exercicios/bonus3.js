let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newnumbers = [];


for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = index -1; secondIndex < index; secondIndex += 1) {
    
    newnumbers.push(numbers[secondIndex] * numbers[index]);
    
  }
  
}
console.log(newnumbers);

