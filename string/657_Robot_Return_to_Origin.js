function judgeCircle(moves) {
    let x = 0;
 let y = 0;
 
 for(let i = 0; i < moves.length; i++){
  if(moves[i] === "U"){
  x++;
  }
 if(moves[i] === "D"){
  x--;
  }
if(moves[i] === "L"){
  y--;
  }
if(moves[i] === "R"){
  y++;
  }
}
 return (x === 0 && y === 0);
    
};

let moves = "UD"
console.log(judgeCircle(moves));

moves = "LD"
console.log(judgeCircle(moves));

moves = "LU"
console.log(judgeCircle(moves));

moves = "UL"
console.log(judgeCircle(moves));

moves = "UU"
console.log(judgeCircle(moves));
