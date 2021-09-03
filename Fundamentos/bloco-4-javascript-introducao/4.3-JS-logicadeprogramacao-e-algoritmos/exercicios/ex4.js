const n = 5;
let line = '';

const star = "*"
const _blank = " ";


//se par
if (n % 2 === 0) {
  for (let index = 2; index <= n; index += 2) {
    let line = '';
    let blank_space = (n - index)/2;
  
    for (let index2 = 1; index2 <= n; index2 += 1) {
      
      if (index2 <= blank_space) {
        line += _blank;
        
      }
      else if(index2 <= n - blank_space) {
        line += star;
      }
      else if(index2 >= n-blank_space) {
        line += _blank;
      }
    }
    
     console.log(line);
    
  }
  
}
//se ímpar
else {for (let index = 1; index <= n; index += 2) {
  let line = '';
  let blank_space = (n - index)/2;

  for (let index2 = 1; index2 <= n; index2 += 1) { 
    
    if (index2 <= blank_space) {
      line += _blank;
      
    }
    else if(index2 <= n - blank_space) {
      line += star;
    }
    else if(index2 >= n-blank_space) {
      line += _blank;
    }
  }
  
   console.log(line);
  
}}





  // for (let index2 = n-1; index2 >= 0; index2 -= 1) {
  //   let line = '';
  //   for (let index = 1; index <= n ; index += 1) {
    
  //     if (index <= index2) {
  //       line += _blank;
       
  //     }
  //     else if(index <= n) {
  //       line += star;
  //     } 
      
  //   }
    
  
   
  
  //   console.log(line);
    
  // }