//write a function to return an object having sum, average, max, min of an array

const arr = [10, 20, 30, 40, 50]
const result = (arr) => {
    let sum = 0;
    let max = -Infinity
    let min = Infinity
    for (let i of arr) {
        sum += i
        if (i > max) max = i
        if (i < min) min = i
    }
    let avg = sum / arr.length
    return { sum, avg, max, min }
}
console.log(result(arr));

//Task 5 : Frequency Counter
const arrA = ["a", "b", "a", "c", "b", "a"]
const frequencyCount = () => {
    let freq = {};
    for (let char of arrA) {
        freq[char] ? freq[char]++ : freq[char] = 1
    }
    return freq
}
console.log(frequencyCount(arrA));


//Task 1: Second Largest Number
const arrB = [10, 5, 8, 20, 15]
const SecLarge = (arrB) => {
    let firstmax = -Infinity
    let secondtmax = -Infinity

    for (let num of arrB) {
        if (num > firstmax) { firstmax = num; num = secondtmax }
        else if (num > secondtmax && num !== firstmax) { secondtmax = num }
    }
    return { secondtmax }
}
console.log(SecLarge(arrB));

//Task 8: Find First Non-Repeating Element
const arrC = [8, 8, 4, 5, 1, 2, 0, 4, 1, 2]
const nonRepete = (arrC) => {
    const freq = {}
    for (let num of arrC) {
        if (freq[num]) { freq[num]++ }
        else { freq[num] = 1 }
    }
    for (let num of arrC) {
        if (freq[num] === 1) {
            return num
        }
    }
    return freq
}
console.log("Non-Repeating Element", nonRepete(arrC))


//Task 6: Find Missing Number
const arrD = [1, 2, 3, 5]
const missed = (arrD) => {
    let n = arrD.length + 1
    let sumAll = n * (n + 1) / 2

    let sum = 0
    for (let num of arrD) {
        sum += num
    }

    return (sumAll - sum)  
}
console.log("Missing Number", missed(arrD));

//Task 7: Move Zeros to End
const arrE = [0,1,0,3,12]
const newArr = (arr) => {
    let arrone = []
    let arrsecond = []
    for(let num of arr){
        if(num === 0){arrsecond.push(num)}
        else{arrone.push(num)}
    }
    return [...arrone,...arrsecond]
}
console.log(newArr(arrE));

//Task 7: Move Zeros to End
const arrF = [0,1,0,3,12]
