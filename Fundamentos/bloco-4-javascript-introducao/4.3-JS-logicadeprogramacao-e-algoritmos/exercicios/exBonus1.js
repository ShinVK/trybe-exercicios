const n = 20; //tem que ser ímpar
let line = '';

const star = "*"
const _blank = " ";
// let positionStarRight = 1 + blank_space;
// let positionStarLeft = n - blank_space; 



//se ímpar
for (let index = 2; index <= n; index += 2) {  //3
  let line = '';
  let blank_space = (n - index)/2; //7-3/4 =2
  let positionStarRight = 1 + blank_space;
  let positionStarLeft = n - blank_space; 


  for (let index2 = 1; index2 <= n; index2 += 1) {  //1


    
    if (index2 <= blank_space && index < n) {  //se 1 menor ou igual a 2 - espaçoembranco? , para o 3 ta certo
      line += _blank;
      
    }
    else if(index2 <= n - blank_space && index <=1) {  //3 <= 4 
      line += star;
    }
    else if(index2 == positionStarLeft && index < n) {
      line += star;
    }

    else if(index2 == positionStarRight && index < n){
      line += star;
    }

    else if(index2 >= blank_space && index < n) {
      line += _blank;
    }
    else if(index = n) {
      line += star;
    }

    
  }
  
   console.log(line);
  
}
