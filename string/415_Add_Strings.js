function addStrings(num1, num2) {
    let sum = BigInt(num1) + BigInt(num2);
    return sum.toString();
};

let num1 = "123"
let num2 = "11"
console.log(addStrings(num1, num2));

num1 = "236"
num2 = "77"
console.log(addStrings(num1, num2));

num1 = "436"
num2 = "27"
console.log(addStrings(num1, num2));

num1 = "2386"
num2 = "779"
console.log(addStrings(num1, num2));

num1 = "136"
num2 = "727"
console.log(addStrings(num1, num2));