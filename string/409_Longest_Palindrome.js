function longestPalindrom(s) {
    let map = new Map();
    let evenCountSum = 0;
    let hasValueOne = false;

    for (let char of s) {
        if (!map.has(char)) {
            map.set(char, 1);
        } else {
            let count = map.get(char) + 1;
            if (count % 2 === 0) {
                evenCountSum += count;
                map.set(char, 0);
            } else {
                map.set(char, count);
                evenCountSum += count - 1;
            }
        }

        if (map.get(char) === 1) {
            hasValueOne = true;
        }
    }
    if (hasValueOne) {
        return evenCountSum + 1;
    } else {
        return evenCountSum;
    }
}


console.log(longestPalindrom("abccccddee"));
console.log(longestPalindrom("a"));
console.log(longestPalindrom(""));
