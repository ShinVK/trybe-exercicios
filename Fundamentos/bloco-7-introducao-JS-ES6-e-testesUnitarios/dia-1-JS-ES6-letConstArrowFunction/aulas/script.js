function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = ifScope + " ótimo, fui utilizada no escopo !";
    console.log(ifScope);
  } else {
    let elseScope = "Não devo ser utilizada fora do meu escopo (else)";
    console.log(elseScope);
  }
  // console.log(ifScope + " o que estou fazendo aqui ? :O"); // Se necessário esta linha pode ser removida.
}

testingScope(false);

const testingScope2 = (escopo) => {
  const ifEscope = "Não devo ser utilizada fora do meu escopo";
  const expression = escopo
    ? `${ifEscope} (if) ótimo, fui utilizada no escopo !`
    : `${ifEscope} (else)`;
  console.log(expression);
};

testingScope2(false);
