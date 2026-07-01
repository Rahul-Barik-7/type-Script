/* 
   1. every() will check if all the element safifying the condition then only return true or else false
   2. Syntax: array.every(function(element, index, array){})

*/

let positiveNums: Array<number>= [1, 2,  1, 4, 5, -10];

//Example-1
console.log("");
console.log("==> check ell the array elements contains the positive numbers or not ");

let checkPositive = positiveNums.every((element) => {
    if (element>0) {
        return element;
    }
})
console.log("does all the array elements contains positive values : ",checkPositive)