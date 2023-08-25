function longest_palindromic_substring(s) {
    let res = "";
    let max = 0;

    for(let i = 0; i < s.length; i++){
        for(let j = 0; j <= 1; j++){
            let l = i;
            let r = i + j;

            while(l >= 0 && r < s.length && s[l] === s[r]){
                let len = r - l + 1;
                if(len > max){
                    res = s.substring(l, r + 1);
                    max = len;
                }
                l--;
                r++;
            }
        }
    }
    return res;
};



function test_cases(s){
    for(let i = 0; i < s.length; i++) {
        console.log(longest_palindromic_substring(s[i]));
    }   
}
let s = ["", "adda", "abcd", "aaaabcb", "akkakakaaaak", "!@#@$%^$%%$", "ase45##54esfg"]
test_cases(s);