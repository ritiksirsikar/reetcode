function countconsistency(allowed, words) {
       let allow = new Set(allowed);
    let count = 0;
    for(let word of words){
        let consistent = true;
        for(let char of word){
            if(!allow.has(char)){
                consistent = false;
                break;
            }
        }
        if(consistent){
            count++;
        }
    }
    return count;
};

let allowed = "ab";
let words = ["ad","bd","aaab","baa","badab"];
console.log(countconsistency(allowed, words));

allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
console.log(countconsistency(allowed, words));

allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
console.log(countconsistency(allowed, words));

allowed = "xyz", words = ["x", "y", "z", "xy", "xz", "yz", "xyz"];
console.log(countconsistency(allowed, words));

allowed = "aeiou", words = ["a", "e", "i", "o", "u", "ae", "io", "aeiou"];
console.log(countconsistency(allowed, words));