function maxBalloon(text){
    let letters = {"b": 0, "a": 0, "l": 0, "o": 0, "n": 0}
    
    for(let i = 0; i < text.length; i++){
        if(letters.hasOwnProperty(text[i])){
            letters[text[i]] += 1;
        }
    }
    letters['l'] = Math.floor(letters['l'] / 2);
    letters['o'] = Math.floor(letters['o'] / 2);
    
    return Math.min(...Object.values(letters));
}


//test cases
console.log(maxBalloon(""))
console.log(maxBalloon("nlaebolko"))
console.log(maxBalloon("loonbalxballpoon"))
console.log(maxBalloon("leetcode"))
console.log(maxBalloon("baloon"))
console.log(maxBalloon("balon"))
console.log(maxBalloon("balloonballoonballoon"))