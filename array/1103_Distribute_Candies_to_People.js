function distributeCandies(candies, num_people){
let arr = Array(num_people).fill(0); 
    let i = 0;

    while (candies > 0) {
        arr[i % num_people] += Math.min(candies, i + 1);
        candies -= i + 1;
        i++;
    }
    return arr;
}


//Test Cases
console.log(distributeCandies(7, 4));
console.log(distributeCandies(10, 3));
console.log(distributeCandies(20, 1));
console.log(distributeCandies(0, 1));
console.log(distributeCandies(0, 0));