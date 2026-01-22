// const text = "JS is great and JS is powerful and JS is fun";

// const answer = text.split(" ")
//     .map(x => x.toLocaleLowerCase())
//     .filter(x => x.length >= 3)
//     .reduce((acc, word) => {

//         const findWord = acc.find(w=> w[0]==word);

//         if (findWord) {
//             findWord[1]++;
//         }
//         else {
//             acc.push([
//                 word, 1
//             ])
//         }
//         return acc

//     }, [])
// console.log(answer);

console.log(["a", "b", "a", "c", "b", "a"].reduce((acc, char) => {

    const findChar = acc.find(w => w[0] == char);

    if (findChar) {
        findChar[1]++;
    }
    else {
        acc.push([
            char, 1
        ])
    }

    return acc;

}, []));
