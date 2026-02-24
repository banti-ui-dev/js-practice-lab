const arr = "Banti Kumar Soni banti Kumar"
let words = arr.toLowerCase().split(" ")
let text = arr.toLowerCase().split("")

const freq = (str) => {
    const frequency = {};
    for (let i = 0; i < str.length; i++) {
        frequency[str[i]] ? frequency[str[i]]++ : frequency[str[i]] = 1
    }
    return frequency
}
console.log(freq(text))
console.log(freq(words))

