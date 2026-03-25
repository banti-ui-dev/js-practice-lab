//Remove Duplicates from Object Array
const users = [
  { id: 1, name: "Banti" },
  { id: 2, name: "Rahul" },
  { id: 1, name: "Banti" }
];

const unique = users.filter(
  (item, index, arr) =>
    index === arr.findIndex(u => u.id === item.id)
);

console.log(unique);


//Find Missing Number in Array
const arr = [1, 2, 3, 5];
const n = arr.length + 1;
const total = (n * (n + 1)) / 2;
const sum = arr.reduce((a, b) => a + b, 0);

console.log(total - sum); // 4


// result 11+5-12 = 4 and 4+5+10 = 19 the Difference:  19-4 = 15


const arrN = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
const diagonalDiffrence = (arr) => {
  let sumleftRight = 0
  let sumrightLeft = 0
  for (let i = 0; i < arr.length; i++) {
    let leftRight = arr[i][i]
    let rightLeft = arr[i][arr.length - 1 - i]
    sumleftRight = sumleftRight + leftRight
    sumrightLeft = sumrightLeft + rightLeft
  }
  return Math.abs(sumleftRight - sumrightLeft)
}
console.log(diagonalDiffrence(arrN))


//Input: [1,2,3,[4,5,6,[7,8,[10,11]]],9] flatern this
const arrB = [1, 2, 3, [4, 5, 6, [7, 8, [10, 11]]], 9];

const flaternArr = (arr) => {
  let flatern = [];
  for (let num of arr) {
    if (Array.isArray(num)) {
      flatern = flatern.concat(flaternArr(num))
    } else {
      flatern.push(num)
    }
  }
  return flatern
}
console.log(flaternArr(arrB));


//const arr = [1, 2, 3, 5]; sum of the number without for loop
const arrC = [1, 2, 3, 5];
let sumofNum = arrC.reduce((total, num) => total + num, 0)
console.log(sumofNum);


//Find first repeating character (e.g., "success" → "c")
const firstRepeat = (str) => {
  let frequency = {};
  for (let char of str) {
    if (frequency[char]) {
      return char
    } else {
      frequency[char] = 1
    }
  }
}
console.log(firstRepeat("success"));

//Find the minimum number in given array
const inputarr = [8, 3, 12, 1, 6]
const minNum = (arr) => {
  let minVal = Infinity;
  for (let num of arr) {
    if (num < minVal) minVal = num
  }
  return minVal
}
console.log(minNum(inputarr))



const data = "Welcome to Javascript Interview!";
//Result : emocleW ot tpircsavaJ !weivretnI
const reverseStr = (str) => {
  let strArr = str.split(" ")
  const words = strArr.map((item) => {
    newItem = item.split("");
    let reverse = []
    for (let i = newItem.length - 1; i >= 0; i--) {
      reverse.push(newItem[i])
    }
    return reverse.join("")
  })
  return words
}
console.log(reverseStr(data))