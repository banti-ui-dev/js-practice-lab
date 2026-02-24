//example of concadination
const dataOne = [1, 5, 7, 8, 9, 2];
const dataTwo = [6, 8, 2, 5, 4, 5, 5];
const finaldata = [...dataOne, ...dataTwo]
console.log(finaldata);



const arr = [1, 2, 3, 4, [5, 6, 7, [8, [3, 5]]]];
//Flat mathod
console.log(arr.flat(Infinity));



//Recursive Flatten Function
const flatern = (str) => {
    let result = []
    for (let i = 0; i < str.length; i++) {
        if (Array.isArray(str[i])) {
            result = result.concat(flatern(str[i]))
        } else {
            result.push(str[i])
        }
    }
    return result
}
console.log(flatern(arr));
