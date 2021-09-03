const elem = document.querySelector("#elementoOndeVoceEsta");
elem.parentNode.style.color = "red";
// elem.parentNode.innerText = "testo";
document.querySelector("#elementoOndeVoceEsta #primeiroFilhoDoFilho").innerText = "asdfjasjfklçasjdfkl sdkljfaklçsfjasl alçksdjfaskljdfasklç  aklsdfjasdç "

const childe = document.getElementsByTagName("pai").firstChild;
elem.previousElementSibling;

elem.nextSibling
elem.nextSibling.nextSibling

const paiz = elem.parentNode;
let broda = document.createElement('section');
broda.innerText = "Eu sou irmão do elementoOndeVoceEsta";
paiz.appendChild(broda);

let son = document.createElement('div')
son.innerText = "Eu sou filho do elementoOndeVoceEsta";
elem.appendChild(son);

const sonoft = document.querySelector("#elementoOndeVoceEsta div");

const avuelo = document.querySelector("#paiDoPai");
// avuelo.removeChildren()