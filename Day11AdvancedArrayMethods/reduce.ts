/* 

1. reduce() goes through each elemnts in array and combines them all into a single value.
2. syntax: array.reduce(function(accumulator, currentValue, index, array){});
3. accumulator means that single value we update/store (The accumulator value from previous iteration)
4. it won't return a array , it return a single value

*/

let values: Array<number> = [1, 2, 3, 4, 5];

//Example-1
console.log("");
console.log("==> get the total (sum) of all the elements in the array using traditional for loop");

let sumOfElementValue: number = 0;
for (let i: number = 0; i < values.length; i++) {
    sumOfElementValue = sumOfElementValue + values[i];
}
console.log("Sum of element is : ",sumOfElementValue);

//Example-2
console.log("");
console.log("==> get the total (sum) of all the elements in the array using 'reduce()'");

let reduceResult = values.reduce((totalValues,element) =>{
    return totalValues + element;
},0) //if you want to specify accumulator default values then you can specify here else 0 will be assigned (it is optional)

//let reduceResult = values.reduce((totalValues,element) => totalValues + element,0); //optimized
console.log("Sum of element is : ", reduceResult);







