function goal_parser(command) {
   let output = '';
  let i = 0;
  while (i < command.length) {
    if (command[i] === 'G') {
      output += 'G';
      i++;
    } else if (command[i] === '(' && command[i+1] === ')') {
      output += 'o';
      i += 2;
    } else if (command[i] === '(' && command[i+1] === 'a' && command[i+2] === 'l' && command[i+3] === ')') {
      output += 'al';
      i += 4;
    } else {
      i++;
    }
  }
  return output;
    
};


let command = "G()(al)";
console.log(goal_parser(command));

command = "G()()()()(al)"
console.log(goal_parser(command));

command = "(al)G(al)()()G"
console.log(goal_parser(command));

command = "G()()G";
console.log(goal_parser(command));

command = "(al)(al)(al)";
console.log(goal_parser(command));