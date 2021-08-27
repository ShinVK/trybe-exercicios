let angA;
let angB;
let angC;

angA = 80;
angB = 60;
angC = 60;

const angMax = 180;
const angTotal = angA + angB + angC;

if (angTotal == angMax && angA > 0 && angB > 0 && angC >0) {
  console.log(true);
}
else if (angTotal > angMax || angTotal < angMax &&  angA > 0 && angB > 0 && angC >0) {
  console.log(angTotal);
  console.log(false);
}
else {
  console.log("Erro: angulo impossível");
}

