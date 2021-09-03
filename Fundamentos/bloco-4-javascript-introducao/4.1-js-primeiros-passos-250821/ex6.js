let chessPiece;
chessPiece = 'reI'




let lowerChessPiece = chessPiece.toLowerCase();
console.log(lowerChessPiece);
switch (lowerChessPiece) {
  case 'cavalo':
    
    console.log("Movimenta em L");
    break
  case 'peão':
    console.log("movimenta em linha reta (uma casa) e captura em diagonal");
    break
  case 'bispo':
    console.log("Movimenta em diagonal, quantas casas quiser, desde que não tenha uma peça no lugar que irá se movimentar");
    break
  case 'rainha':
    console.log("Movimenta em todas direçoes, quts quiser");
    break
  case 'rei':
    console.log("movimenta em todas direçoes uma casa");
    break
  case 'torre':
    console.log("Movimenta em linha reta, quts quiser");
    break
  default:
    console.log("Essa é uma peça de xadrez?");
}