const bntprofile = {
  name: "Banti Kumar",
  userid: 6546135,
  skill: {
    primery: "HTML, JavaScript",
    secondary: "CSS, Bootstrap5"
  },
  address: {
    address01: "Wipro Circle",
    city: "Hyderabad"
  }
}
//make deep copy
const newprofile = JSON.parse(JSON.stringify(bntprofile))
newprofile.address.city = "Pune"
console.log(newprofile.address.city);
console.log(bntprofile.address.city);

//make shallow copy
const newprofile2 = { ...bntprofile }
newprofile2.skill.primery = "React, JS"
console.log(newprofile2.skill.primery);
console.log(bntprofile.skill.primery);




//Remove Duplicates from Object Array
const users = [
  { id: 1, name: "Banti" },
  { id: 2, name: "Rahul" },
  { id: 1, name: "Banti" }
];
const filteruser = users.filter((item, index, arr) =>
  index === arr.findIndex(user => user.id === item.id)
)
console.log(filteruser);

//Find Missing Number in Array
const arrA = [1, 2, 3, 5]

let n = arrA.length + 1;
const total = (n * (n + 1) / 2)
console.log(total);

let sum = 0
for (let i = 0; i < arrA.length; i++) {
  console.log(arrA[i]);
  sum = sum + arrA[i]
}

console.log("The missing number", total - sum);


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
const arrC = [1, 2, 3, 5]
const sumArr = arrC.reduce((total, num) => total + num, 0)
console.log(sumArr);


//Find first non repeating character (e.g., "success" → "U")

const frepeterd = (str) => {
  let frequency = {};
  for (let char of str) {
    if (frequency[char]) {
      frequency[char]++
    } else {
      frequency[char] = 1
    }
  }

  for (let char of str) {
    if (frequency[char] === 1) {
      return char
    }
  }
  return null
}
console.log(frepeterd("success"));



//Find the Min val in given array
const inputarr = [8, 3, 12, 1, 6, 25]
const minval = (arr) => {
  let min = Infinity;
  let max = -Infinity;
  for (let num of arr) {
    if (num < min) min = num
    if (num > max) max = num
  }
  return { min, max }
}
console.log(minval(inputarr))


const data = "Welcome to Javascript Interview!";
//Result : emocleW ot tpircsavaJ !weivretnI
const reverse = (arr) => {
  const narr = arr.split(" ")
  const reverse = narr.map(item => {
    reversedata = [];
    for (let i = item.length; i >= 0; i--) {
      reversedata.push(item[i])
    }
    return reversedata.join("")
  })
  return reverse
}
console.log(reverse(data));

const arrD = ["a", "1", "b", "2", "c", "3"];
// output "{ a: 1, b: 2, c: 3 }"
const obj = (arr) => {
  const result = {}
  for (let i = 0; i < arr.length; i = i + 2){
    result[arr[i]] = arr[i+1]
  }
  return result
}
console.log(obj(arrD));
