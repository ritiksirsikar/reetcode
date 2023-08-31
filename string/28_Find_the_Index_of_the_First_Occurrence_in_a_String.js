function findindex_first_occurence(haystack, needle){
    
    if (needle === "") {
        return 0;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
}

let haystack = "sadbutsad";
let needle = "sad";
console.log(findindex_first_occurence(haystack, needle));

haystack = "leetcode", needle = "leeto"
console.log(findindex_first_occurence(haystack, needle));

haystack = "abcdefg", needle = "cde"
console.log(findindex_first_occurence(haystack, needle));

haystack = "abcdefgh", needle = "xyz"
console.log(findindex_first_occurence(haystack, needle));

haystack = "aaaaaa", needle = "aa"
console.log(findindex_first_occurence(haystack, needle));
