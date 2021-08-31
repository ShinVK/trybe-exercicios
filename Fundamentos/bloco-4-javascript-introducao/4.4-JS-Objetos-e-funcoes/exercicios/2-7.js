// let totalStr = 'fernando';
// let endStr = 'rna'
// let z = -endStr.length;



// if(totalStr.slice(z) === endStr) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//parametros: totalStr, endStr
//variável: z

function verificaFimPalavra (totalStr, endStr) {
  let z = -endStr.length;
  let finalIsTheSame = Boolean;
  if(totalStr.slice(z) === endStr) {
    return true;
  } else 
  return false;
  }


finalIsTheSame = verificaFimPalavra('trybe' , 'bry')
console.log(finalIsTheSame);