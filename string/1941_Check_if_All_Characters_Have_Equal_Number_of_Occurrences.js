function checkcharachter_havingequalNumber(s) {
    let mapping = new Map();
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (mapping.has(char)) {
            mapping.set(char, mapping.get(char) + 1);
        } else {
            mapping.set(char, 1);
        }
    }
    let values = [...mapping.values()];
    for (let i = 1; i < values.length; i++) {
        if (values[i] !== values[0]) {
            return false;
        }
    }
    return true;
}

let s;

s = "abacbc";
console.log(checkcharachter_havingequalNumber(s));

s = "aaabb";
console.log(checkcharachter_havingequalNumber(s));

s = "aaabbbccc";
console.log(checkcharachter_havingequalNumber(s));

s = "xyzxzy";
console.log(checkcharachter_havingequalNumber(s));
