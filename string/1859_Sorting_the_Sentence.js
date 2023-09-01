function sortthesentence(s) {
    let output = s.split(' ');
  let arr = [];
  for(let i = 0; i< output.length; i++){
    let index = output[i].slice(-1);
    arr[index -1] = output[i].slice(0, -1);
  }
  return arr.join(' ');  
};


let s = "is2 sentence4 This1 a3"
console.log(sortthesentence(s));

s = "Myself2 Me1 I4 and3"
console.log(sortthesentence(s));

s = "Hello1 world3 the2"
console.log(sortthesentence(s));