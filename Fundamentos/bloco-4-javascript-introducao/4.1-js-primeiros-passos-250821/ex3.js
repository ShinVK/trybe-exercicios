const numeroC = 2;
const numeroD = 9;
const numeroE = 3;

let maiorDosTres;

if (numeroC >= numeroD && numeroC > numeroE) {
  maiorDosTres = console.log(numeroC);
  console.log("Esse é o maior número dos 3");
} 
else if (numeroD > numeroC && numeroD >= numeroE) {
  aiorDosTres = console.log(numeroD);
  console.log("Esse é o maior número dos 3");
}
else if (numeroE >= numeroC && numeroE > numeroD) {
  aiorDosTres = console.log(numeroE);
  console.log("Esse é o maior número dos 3");
}
else {
  console.log("Os números são iguais");
}