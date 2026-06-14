// Named Function: A function that is declare with a Name
/* 
function functionName(parameter): returntype{
    //block of code 
}

functionName(); //calling the function or invoking the function
*/

//Example-1 (named function with no param and no return types)
function display(): void {
    console.log("Welcome")
}
display(); //calling function


//Example-2 (named function with param and return the types)
function addNumbers(x: number, y: number): number {
    return x + y;
}
let sum = addNumbers(200, 1);
console.log(sum);

//Example-3 (named function with rest params)
//rest parameters restricts the number of values that you can pass to a function

/* let sumOfNumbers: number = 0
function addNums(...nums: number[]) {
    for (let i = 0; i < nums.length; i++) {
        sumOfNumbers = sumOfNumbers + nums[i]
    }
    console.log(`Sum of Numbers is: ${sumOfNumbers}`)
}
addNums(10, 20, 30, 50, 30,60); */


//Example-4 (named function rest params)
function findElement(...element:(number | string)[]):number
{
    return element.length;
}

let elemenetLength=findElement("Rahul",10,"string",'s',`ABCD`,100);
console.log(elemenetLength);