/* 

1. some() - will check atleast one element is satisfies the condition , is yes then it will return true else false
2. it takes function as a params
3. syntax: array.some(function(currentValue, index, array){})
4. returns boolean value 

*/



let nums: Array<number>= [1, 2, 0, -1, 4, 5, 10];
let negativeNums: Array<number>= [-1, -2, 0, -1, -4, -5, -10];

//Example-1
console.log("");
console.log("==> check array contains the negative numbers or not ");

let someElement1:boolean = nums.some((element) => {
    if (element < 0) {
        return element;
    }
})
console.log("does array contains Negaive value : ",someElement1);


//Example-2
console.log("");
console.log("==> check array contains the positive numbers or not ");

let someElement2:boolean = negativeNums.some((element) => {
    if (element > 0) {
        return element;
    }
})
console.log("does array contains Positive value : ",someElement2);

