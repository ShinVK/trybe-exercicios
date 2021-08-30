const n = 100;
let line = '';
const star = "*"
const _blank = " ";

  for (let index2 = n-1; index2 >= 0; index2 -= 1) {
    let line = '';
    for (let index = 1; index <= n ; index += 1) {
      if (index <= index2) {
        line += _blank;
      }
      else if(index <= n) {
        line += star;
      } 
    }
    console.log(line);
  }
  