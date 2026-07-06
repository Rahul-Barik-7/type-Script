//print sum of numbers 
let sumOFTotal:number= 0;
function getSum(...sumOfNumbers: number []):number {
    for (let i: number = 0; i < sumOfNumbers.length; i++) {
        sumOFTotal = sumOFTotal + sumOfNumbers[i];
    }
    return  sumOFTotal;
}
console.log("Sum of All Number is: ", getSum(10,20,30,40,50));