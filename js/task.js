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
    let rightLeft = arr[i][arr.length-1-i]
    sumleftRight = sumleftRight + leftRight
    sumrightLeft = sumrightLeft + rightLeft
  }
  return Math.abs(sumleftRight-sumrightLeft)
}
console.log(diagonalDiffrence(arrN))
