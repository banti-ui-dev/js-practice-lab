const arr = "Banti Kumar Soni banti Kumar"
let words = arr.toLowerCase().split(" ")  //["banti", "kumar", "soni", "banti", "Kumar"]
console.log(words);
let text = arr.toLowerCase().split("") // ['b', 'a', 'n', 't', 'i', ' ', 'k', 'u', 'm', 'a', 'r', ' ', 's', 'o', 'n', 'i', ' ', 'b', 'a', 'n', 't', 'i', ' ', 'k', 'u', 'm', 'a', 'r']
console.log(text);
const freq = (str) => {
    const frequency = {};
    for (let i = 0; i < str.length; i++) {
        frequency[str[i]] ? frequency[str[i]]++ : frequency[str[i]] = 1
    }
    return frequency
}
console.log(freq(text))
console.log(freq(words))
