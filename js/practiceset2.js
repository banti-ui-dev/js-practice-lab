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
const arrE = [0, 1, 0, 3, 12]
const newArr = (arr) => {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        //use swipe method
        if (arr[i] !== 0) {
            [arr[index], arr[i]] = [arr[i], arr[index]]
            index++
        }
    }
    return arr
}
console.log(newArr(arrE));


//Task 9: Find Pair With Target Sum
//target = 9 Output: [2,7]
const arrF = [2, 7, 11, 15]
const pair = (target, arr) => {
    let pairarr = {};
    for (let num of arr) {
        const needed = target - num;
        if (pairarr[needed]) {
            return [needed, num]
        }
        pairarr[num] = true;
    }

}
console.log(pair(9, arrF));




//Task 10: Single Loop Stats (Hard)
const arrG = [10, 20, 30, 40, 5, -5]
const newObj = (arr) => {
    let sum = 0;
    let min = Infinity;
    let max = -Infinity
    let evenCount = 0
    let oddCount = 0
    let negativeCount = 0

    for (let num of arr) {
        sum += num
        if (num > max) max = num
        if (num < min) min = num
        if (num % 2 === 0) evenCount++
        else oddCount++
        if (num < 0) negativeCount++
    }
    let avg = sum / arr.length
    return { sum, min, max, evenCount, oddCount, negativeCount, avg }
}
console.log(newObj(arrG));




//Task 11: Flatten Array
const numArr = [1, [2, 3], [4, [5, 6]]]
const flaterArr = (arr) => {
    let flatern = [];
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            flatern = flatern.concat(flaterArr(arr[i]))
        }else{
            flatern.push(arr[i])
        }
    }
    return flatern
}
console.log(flaterArr(numArr));

