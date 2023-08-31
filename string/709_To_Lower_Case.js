function toLowerCase(s) {
    output = ""
    
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        output = output + char.toLowerCase();
    }
    return output;
}

let s = "LEETCODE"
console.log(toLowerCase(s));

s = "here";
console.log(toLowerCase(s));

s = "HELLO"
console.log(toLowerCase(s));

s = "WORLD"
console.log(toLowerCase(s));

s = "ICECREAM"
console.log(toLowerCase(s));