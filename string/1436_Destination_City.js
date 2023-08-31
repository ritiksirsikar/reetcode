function destination_city(paths) {
    let set = new Set();
 for(let i = 0; i< paths.length; i++){
  set.add(paths[i][0]);
 }
 for(let i = 0; i < paths.length; i++){
  if(!set.has(paths[i][1])){
   return paths[i][1];
  }
 }
};

let paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
console.log(destination_city(paths));

paths = [["B","C"],["D","B"],["C","A"]]
console.log(destination_city(paths));

paths = [["A","Z"]]
console.log(destination_city(paths));

paths = [["A","B"],["B","C"],["C","D"],["D","E"],["E","F"]];
console.log(destination_city(paths));
