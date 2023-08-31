function simplify_path(path){
    let stack = [];
  let parts = path.split('/');
  for(let i = 0; i < parts.length;i++){
    if(parts[i] == "" ||parts[i] == "."){
      continue;
    }
    if(parts[i] == '..'){
      stack.pop();
    }
    else{
      stack.push(parts[i]);
    }
  }
  return "/" + stack.join('/');
}

path = "/home/"
console.log(simplify_path(path));

path = "/../"
console.log(simplify_path(path));

path = "/home//foo/"
console.log(simplify_path(path));

path = "/abc/def/ghi/../jkl/mno/../../pqr/"
console.log(simplify_path(path));

path = "/abc/def/../../../../../"
console.log(simplify_path(path));

path = "/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z/"
console.log(simplify_path(path));