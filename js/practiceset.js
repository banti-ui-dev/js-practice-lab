const a = {};               //{}.toString()  "[object Object]"
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;                 // a["[object Object]"] = 123;
a[c] = 456;                 // a["[object Object]"] = 456;
// a[c] overwrite the value of a[b]
console.log(a[b]);
// result 456



// show 1-20 numbers the num divided by 3 : Fizz, the num divided by  : Buzz and the num divided by both : Fizz Buzz
const numA = (val) => {
    const result = []
    for (let i = 1; i <= val; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("Fizz Buzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result
}
console.log(numA(20));


// write a function where pass a parameter r, write logic in that function that respond only even number between 0 to r
const evenNum = (r) => {
    const num = []
    for (let i = 0; i <= r; i++) {
        if (i % 2 === 0) {
            num.push(i)
        }
    }
    return num
}
console.log(evenNum(10));

// we have a array check a number having in this array print Yes and if not print No
const arr = [5, 6, 8, 6, 2, 1, 5, 8];
const testAvail = (k, arr) => {
    return arr.includes(k) ? "Yes" : "No"
}
console.log(testAvail(5, arr));

//Return sum of even numbers from 1 to n.
const sumEvennum = (n) => {
    var sum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    return sum
}
console.log(sumEvennum(520));

//Find the Largest Number in Array (without Math.max)
const arrA = [5, 6, 8, 6, 2, 1, 5, 8];
const largestNum = (arrs) => {
    let largest = -Infinity
    let secLargest = -Infinity
    for (let i = 0; i <= arrs.length; i++) {
        if (arrs[i] > largest) {
            largest = arrs[i]
            arrs[i] = secLargest
        } else if (arrs[i] > secLargest && arrs[i] !== largest) {
            secLargest = arrs[i]
        }
    }
    return [largest, secLargest]
}
console.log(largestNum(arrA));



//Move all zeros to end (without changing order)
const num = [0, 1, 0, 3, 12];
const newNum = (abc) => {
    let numarr = []
    let zeroarr = []
    for (let i = 0; i <= abc.length - 1; i++) {
        if (abc[i] !== 0) {
            numarr.push(abc[i])
        } else {
            zeroarr.push(abc[i])
        }
    }
    return [...numarr, ...zeroarr]
}
console.log(newNum(num));


//Find First Non-Repeating Character - programming
const firstNonrep = (str) => {
    let repeted = ""
    for (let i = 0; i <= str.length; i++) {
        let char = str[i]
        if (!repeted[char]) {
            return char
        }
    }
}
console.log(firstNonrep("programming"));

// filter object
const users = [
    { name: "Amit", age: 17, active: true },
    { name: "Riya", age: 22, active: false },
    { name: "Karan", age: 19, active: true },
    { name: "Neha", age: 16, active: true },
    { name: "Vikas", age: 25, active: true }
];
//use filter method to get 18 and 18 plus array
const filteredData = users.filter(item => (
    item.active === true && item.age >= 18
))
console.log(filteredData);

// sort array
const arrB = [5, 3, 7, 5, 9, 4, 1, 2, 5, 8, 49, 6]
const sortarr = (arrB) => {
    let unique = [];
    for (let i = 0; i <= arrB.length - 1; i++) {
        if (!unique.includes(arrB[i])) {
            unique.push(arrB[i])
        }
    }
    return unique.sort()
}
console.log(sortarr(arrB));



// p3
let x;
if (x = false === true) {
    console.log(x);
} else {
    console.log('Not x');
}
// result : Not x

//
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}
// Result 0 1 2 3 4
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}
// Result 5 5 5 5 5

console.log(5 > 3 > 1);
//Result Error