const arr = ["AA","aa","Aa","aA"]

const freqMap = arr.reduce((ac, str)=>{

    const charArray = str.split("");

    const charArray1 = charArray.reduce((acc, char)=>{

        if(acc[char]){
            acc[char]++;
        }
        else{
            acc[char] = 1;
        }

        return acc;

    },ac);

    // ac.push(charArray1);

    return ac;
}, [])

console.log(freqMap);