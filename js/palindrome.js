//Make reverse this number : 516465

//using inbuilt reverse method
const result = (num) => {
    const final = +num.toString().split("").reverse().join("")
    return final
}
console.log(result(516405));

//using loop method

const reverse = (val) => {
    const neVal = val.toString().split('')
    const reverseNum = [];
    for (let i = neVal.length; i >= 0; i--) {
        reverseNum.push(neVal[i])
    }
    return reverseNum.join('')
}
console.log(reverse(120));


const data = "Welcome to Javascript Interview!";
//Result : Interview! Javascript to Welcome
const reverseA = (data) => {
    const newdata = data.split(" ")
    const reverse = [];
    for (let i = newdata.length - 1; i >= 0; i--) {
        reverse.push(newdata[i])
    }
    return reverse.join(" ")
}
console.log("reverseA :", reverseA(data));

//Result : emocleW ot tpircsavaJ !weivretnI
const reverseB = (data) => {
    const newdata = data.split(" ")
    const words = newdata.map(item => item.split('').reverse().join(''))
    return words.join(" ")
}
console.log("reverseB :", reverseB(data));

//Result : 
const reverseC = (data) => {
    const newdata = data.split('')
    const reverse = [];
    for (let i = newdata.length - 1; i >= 0; i--) {
        reverse.push(newdata[i])
    }
    return reverse.join('')
}
console.log("reverseC :", reverseC(data));


//Check the Palindrome number : 1001
//using inbuilt reverse method
const palindromeTest = (data) => {
    return data.toString() === data.toString().split('').reverse().join('');
}
console.log(palindromeTest(1001))

//Recursive loop method
const isPalindrome = (data) => {
    const neData = data.toString();
    const reverse = []
    for (let i = neData.length - 1; i >= 0; i--) {
        reverse.push(neData[i])
    }
    return data.toString() === reverse.join('') ? "is Palindrome" : "Not Palindrome"
}
console.log(isPalindrome(101))

//Check the Palindrome 
const greeting = ["Hello", "asa", "Good", "Morning"]
const palindromeText = (greeting) => {
    let reverse = greeting.map(item => {
        let eachword = item.split("").reverse().join("")
        if(eachword === item){
            console.log(item,"-",eachword, ": Is Palindrome");            
        }else{
            console.log(item,"-",eachword, ": Is Not Palindrome");         
        }
    })
}

console.log(palindromeText(greeting));
