function longest_common(strs){
    let pre = strs[0];
    
    for(let word of strs) {
                
        for(let i = pre.length - 1; i >= 0; i--) {
                             
            if(pre[i] !== word[i]) {
                pre = pre.slice(0, i);
            }
        }
    }
    
    return pre;
}
 let strs = ["flower","flow","flight"]
 console.log(longest_common(strs));
 
 strs =["dog","racecar","car"];
 console.log(longest_common(strs));

 strs = ["Hello", "Hell", "Helmet"]
 console.log(longest_common(strs));

 strs = ["can", "candy", "car"]
 console.log(longest_common(strs));

