function fizzbuzz(n){
    let output = [];
  for(let i = 1; i <= n; i++){
     if(i % 3 == 0 && i % 5 ==0){
      output.push("FizzBuzz");
    }
    else if(i % 3==0){
      output.push("Fizz");
    }
    else if(i % 5 == 0){
      output.push("Buzz");
    }
    else{
      output.push(''+i+'')
    };
  }
  return output;
}

n = 3
console.log(fizzbuzz(n));

n = 0
console.log(fizzbuzz(n));

n = 1
console.log(fizzbuzz(n));

n = 6
console.log(fizzbuzz(n));

n = 15
console.log(fizzbuzz(n));

