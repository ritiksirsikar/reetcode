function countcommonwords(words1, words2) {
    let map1 = new Map();
    for (let i = 0; i < words1.length; i++) {
        if (map1.has(words1[i])) {
            map1.set(words1[i], map1.get(words1[i]) + 1);
        } else {
            map1.set(words1[i], 1);
        }
    }
    
    let map2 = new Map();
    for (let i = 0; i < words2.length; i++) {
        if (map2.has(words2[i])) {
            map2.set(words2[i], map2.get(words2[i]) + 1);
        } else {
            map2.set(words2[i], 1);
        }
    }

    let count = 0;
    for (const key of map2.keys()) {
        if (map1.has(key)) {
            count++;
        }
    }

    return count;
}

let words1, words2;

words1 = ["leetcode", "is", "amazing", "as", "is"];
words2 = ["amazing", "leetcode", "is"];
console.log(countcommonwords(words1, words2)); 

words1 = ["b", "bb", "bbb"];
words2 = ["a", "aa", "aaa"];
console.log(countcommonwords(words1, words2)); 

words1 = ["a", "ab"];
words2 = ["a", "a", "a", "ab"];
console.log(countcommonwords(words1, words2)); 

words1 = ["apple", "banana", "cherry", "date"];
words2 = ["banana", "date", "fig", "grape"];
console.log(countcommonwords(words1, words2)); 

words1 = ["cat", "dog", "elephant", "fish"];
words2 = ["dog", "elephant", "giraffe", "hamster"];
console.log(countcommonwords(words1, words2)); 
