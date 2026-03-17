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


//