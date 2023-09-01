function reversedPrefix(word, ch) {
     let index = word.indexOf(ch);
    if (index === -1) {
        return word;
    } else {
        let prefix = word.slice(0, index + 1);
        let suffix = word.slice(index + 1);
        let reversedPrefix = prefix.split("").reverse().join("");
        return reversedPrefix + suffix;
    }

};

word = "abcdefd", ch = "d"
console.log(reversedPrefix(word, ch));

word = "xyxzxe", ch = "z"
console.log(reversedPrefix(word, ch));

word = "abcd", ch = "z"
console.log(reversedPrefix(word, ch));

word = "racecar", ch = "a"
console.log(reversedPrefix(word, ch));

word = "banana", ch = "n"
console.log(reversedPrefix(word, ch));