function getMaxUniqueSplit(s) {
    return getMaxUniqueSplitRecursive(0, s, new Set());
}

function getMaxUniqueSplitRecursive(start, s, set) {
    if (start === s.length) {
        return set.size;
    }
    let count = 0;
    for (let i = start + 1; i <= s.length; i++) {
        let substring = s.substring(start, i);

        if (!set.has(substring)) {
            set.add(substring);
            count = Math.max(count, getMaxUniqueSplitRecursive(i, s, set));
            set.delete(substring);
        }
    }

    return count;
}

let s = "ababccc";
console.log(getMaxUniqueSplit(s));

s = "aba"
console.log(getMaxUniqueSplit(s));

s = "aa"
console.log(getMaxUniqueSplit(s));

s = "abcabc"
console.log(getMaxUniqueSplit(s));

s = "abcdef"
console.log(getMaxUniqueSplit(s));