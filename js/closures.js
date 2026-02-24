//01
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}
// answer 3 3 3
// answer 1 2 3 if we put let at var


//02
var arr = [10, 12, 15, 21];
for (var a = 0; a < arr.length; a++) {
    setTimeout(function () {
        console.log("Index: " + a + ", element: " + arr[a]);
    }, 1000);
}
// var a ek hi variable hai memory me
// setTimeout ne a ki reference store ki
// Jab callback execute hua → a already 4 ho chuka tha
// if we use let the response will as expected

// Result 
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined




//03
function outerNew() {
    let x = 10;  //declear and asign in outer function
    return function inner(y) {
        console.log("Inner Function", x + y);  //x use in child function this is closer
    }
};
const fn = outerNew()
fn(5)  //15


//04 
function outer() {
    let count = 0;
    return function inner() {
        count++;  // the child function use the outerscope variable- this is closer
        console.log(count);
    };
}
const fn1 = outer(); // call to outer()
fn1(); // Result 1
fn1(); // Result 2
const fn2 = outer(); // New call to outer()
fn2(); // Result 1