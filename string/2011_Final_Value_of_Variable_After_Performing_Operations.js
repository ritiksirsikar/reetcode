function finalValueAfterOperation(operations) {
    let output = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '--X' || operations[i] === 'X--') {
            output = output - 1;
        } else {
            output = output + 1;
        }
    }
    return output;
}

let operations;

operations = ["--X", "X++", "X++"];
console.log(finalValueAfterOperation(operations));

operations = ["++X", "++X", "X++"];
console.log(finalValueAfterOperation(operations));

operations = ["X++", "++X", "--X", "X--"];
console.log(finalValueAfterOperation(operations));

operations = ["X--", "X--", "X--"];
console.log(finalValueAfterOperation(operations));

operations = ["++X", "--X", "++X", "--X"];
console.log(finalValueAfterOperation(operations));
