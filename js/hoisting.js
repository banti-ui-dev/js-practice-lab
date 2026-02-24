//Hoisting 

var a = "Banti Kumar";
console.log(a);
// Result : Banti Kumar

////////////////////////////////////////////////////////////

console.log(b);
var b = "Developer"
// Result : undefined 

////////////////////////////////////////////////////////////

details()
function details() {
    console.log("Hi this is Banti Kumar");
}
details()
// Result : Hi this is Banti Kumar
// Result : Hi this is Banti Kumar

////////////////////////////////////////////////////////////

// description() // Result Cannot access 'description' before initialization
var description = () => {
    let a = "Banti Kumar"
    console.log("Hi", a);
}
description()

////////////////////////////////////////////////////////////

foo();
var foo = function () {
    console.log("Hello");
};
// Result foo is not a function

////////////////////////////////////////////////////////////

async function main() {
    console.log('A');
    const result = await Promise.resolve('hello');
    console.log('B', result);
}
main();
console.log('C');
//Result : 
//A
//C
//B hello

////////////////////////////////////////////////////////////

//Temporal Dead Zone
function abc() {
    console.log(i); //ReferenceError: Cannot access 'i' before initialization
    let i = 8;
}
abc()

////////////////////////////////////////////////////////////

//veriable hoisting    var a
console.log(a); //undefined
var a = "Banti"
var a = "Kumar"
console.log(a); //Kumar

////////////////////////////////////////////////////////////

//Function hoisting 
greet() // hoisted overwrited function result greet02

function greet() {
    console.log("greet01");   // greet01      
}

greet() // hoisted overwrited function result greet02 

function greet() {
    console.log("greet02");  // overwrite the previous funtion so the result to greet02    
}

greet() // overwrited function result greet02 