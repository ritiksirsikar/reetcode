function maximumremovals(s, p, removable) {
     function isSubseq(removed) {
    let i1 = 0;
    let i2 = 0;

    while (i1 < s.length && i2 < p.length) {
      if (removed[i1] || s[i1] !== p[i2]) {
        i1++;
        continue;
      }

      i1++;
      i2++;
    }

    return i2 === p.length;
  }

  let left = 0;
  let right = removable.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let removed = new Array(s.length).fill(false);

    for (let i = 0; i <= mid; i++) {
      removed[removable[i]] = true;
    }

    if (isSubseq(removed)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

let s = "abcacb"
let p = "ab"
let removable = [3,1,0]
console.log(maximumremovals(s, p, removable));

s = "abcbddddd", p = "abcd", removable = [3,2,1,4,5,6]
console.log(maximumremovals(s, p, removable));

s = "abcab", p = "abc", removable = [0,1,2,3,4]
console.log(maximumremovals(s, p, removable));

s = "abcabcabc", p = "abc", removable = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(maximumremovals(s, p, removable));

s = "aaaaa", p = "a", removable = [1, 2, 3, 4];
console.log(maximumremovals(s, p, removable));