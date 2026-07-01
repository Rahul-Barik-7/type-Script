// Concept of string immutability (immutable - cannot change original))

let randomNum=10;
let res = randomNum + 5; 
console.log(res); //15
console.log(randomNum); // here randomNum does not change the original value, Because of this feature strig is immutable (this is applicable for string also)

let string1="Welcome";
let modifiedString = string1.concat("to Typescript");
console.log(modifiedString)
console.log(string1); // here string is not changing the original values after applying some methos on it, for this reason string is immutable

/* 
    note : if it is changing the original value then it is string mutable 
*/