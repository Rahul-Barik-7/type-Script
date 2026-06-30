/* 

1. map() - create a new array with the result of calling the function on every element of an array
2. it takes function as a params
3. return the same number of element that we have in original array
4. syntax: array.map(function(currentValue, index, array){})

*/

let numbersList: Array<number> = [1, 2, 3, 4, 5];

//Example-1
console.log("");
console.log("==> Get the squre of all elements in array");

let squreNumbers1:number[] = numbersList.map((element) => {  
    return element*element;
})

//if you have single return statement inside arrow function then we can optimized it by removing curly brases and return type -only for arrow function
let squreNumbers2:number[] = numbersList.map((element) => element*element);
console.log("Original numbers : ", numbersList);
console.log("Squre numbers : ", squreNumbers2);

//Example-2
console.log("");
console.log("==> Double each array");

let doubleValues = numbersList.map(function(element){
    return element*2;
})

console.log("Double values : ",doubleValues);


