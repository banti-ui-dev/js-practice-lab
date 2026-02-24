//print 1-10 numbers - 1 2 3 4 5 6 7 8 9 10
for (let i = 1; i <= 10; i++) {
    console.log("print", i);
}
//print 10-1 reverse
for (let i = 10; i > 0; i--) {
    console.log("reverse", i);
}

//print 1 to 20 only even numbers
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Even", i);
    }
}
//print 1 to 20 only odd numbers
for (let i = 20; i > 0; i--) {
    if (i % 2 !== 0) {
        console.log("odd", i);
    }
}
//calculate the sum of 1-100
var sum = 0;
for (let i = 1; i < 100; i++) {
    sum = sum + i
}
console.log(sum);

//sum of all even numbers 1-100
var evensum = 0;
for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        evensum = evensum + i
    }
}
console.log(evensum);

//sum of all odd numbers between 1-100
var oddsum = 0;
for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        oddsum = oddsum + i
    }
}
console.log(oddsum);

//use of for of loop 
const arr = [1,2,3,4,6]
for(let i of arr){
    console.log(i);    
}