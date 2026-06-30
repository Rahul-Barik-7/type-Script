/* 

1. filter() - create a new array with all the elements that pass or satisfy the function
2. it takes function as a params
3. return either same or few number of elements compared to original array
4. syntax: array.filter(function(currentValue, index, array){})

*/

let numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Example-1
console.log("");
console.log("==> printing all the even numbers using filter()");

let evenNumbers = numbers.filter(function (element) {
    if (element % 2 == 0) {
        return element;
    }
})
console.log("Even Numbers are : ", evenNumbers);

//Example-2
console.log("");
console.log("==> print all the numbers which is greater than 4");

let greaterValues = numbers.filter((element) => {
    if (element > 4) {
        return element;
    }
})
console.log("greater Values : ", greaterValues);
