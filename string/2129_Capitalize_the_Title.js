function capitalizedWords(title) {
    const words = title.split(' ');
    const capitalizedWords = words.map(word => {
        if (word.length <= 2) {
            return word.toLowerCase();
        } else {
            const firstLetter = word.slice(0, 1).toUpperCase();
            const restOfWord = word.slice(1).toLowerCase();
            return firstLetter + restOfWord;
        }
    });
    return capitalizedWords.join(' ');
}

let title;

title = "capiTalIze tHe titLe";
console.log(capitalizedWords(title));

title = "First leTTeR of EACH Word";
console.log(capitalizedWords(title));

title = "i lOve leetcode";
console.log(capitalizedWords(title));

title = "this is a test of special words";
console.log(capitalizedWords(title));

title = "a short title";
console.log(capitalizedWords(title));
