function count_items(items, ruleKey, ruleValue) {
    let count = 0;
  if(ruleKey === 'type'){
    for(let i = 0; i < items.length; i++){
      if(items[i][0] === ruleValue){
        count++;
      }
    }
  }
   if(ruleKey === 'color'){
    for(let i = 0; i < items.length; i++){
      if(items[i][1] === ruleValue){
        count++;
      }
    }
  }
   if(ruleKey === 'name'){
    for(let i = 0; i < items.length; i++){
      if(items[i][2] === ruleValue){
        count++;
      }
    }
  }
  return count;
};

let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]];
let ruleKey = "color";
let ruleValue = "silver";
console.log(count_items(items, ruleKey, ruleValue))

items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
console.log(count_items(items, ruleKey, ruleValue))

items = [["phone","blue","pixel"],["computer","computer","phone"],["phone","gold","computer"]], ruleKey = "type", ruleValue = "silver"
console.log(count_items(items, ruleKey, ruleValue))