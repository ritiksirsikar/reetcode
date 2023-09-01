function sortPeople(names, heights) {
   let output = []
    for(let i=0;i<names.length;i++){
        output.push([names[i],heights[i]])
    }
  // console.log(finalArray);
  output.sort((a,b)=>b[1]-a[1]);
 return output.map((a) => a[0]);

}
let names = ["Mary","John","Emma"]
let heights = [180,165,170]
console.log(sortPeople(names, heights));

names = ["Alice","Bob","Bob"], heights = [155,185,150]
console.log(sortPeople(names, heights));

names = ["Haya", "loner", "controlled"], heights = [202,188,195]
console.log(sortPeople(names, heights));

names = ["Joker", "Spiderman", "superman"], heights = [190, 191, 189]
console.log(sortPeople(names, heights));