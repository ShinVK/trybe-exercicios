let scoreB;
let scoreC;
scoreB = 110;

if (scoreB >= 90 && scoreB <= 100) {
 scoreC = 'A' ;
} 
else if (scoreB >= 80 && scoreB <= 100) {
  scoreC = 'B' ;
}
else if (scoreB >= 70 && scoreB <= 100) {
  scoreC = 'C' ;
}
else if (scoreB >= 60 && scoreB <= 100) {
  scoreC = 'D' ;
}
else if (scoreB >= 50 && scoreB <= 100) {
  scoreC = 'E' ;
}
else if (scoreB < 50 && scoreB >= 0) {
  scoreC = 'F' ;
}
else {
  scoreC = "Error"
}

console.log(scoreB);
console.log(scoreC);