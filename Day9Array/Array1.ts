console.log("=======================WELCOME TO ARRAY=======================")
/*
Arrays in TypeScript
---------------------
- An array is a special type of variable that stores multiple values.
- The values can be of the same data type or different data types.
- Arrays are declared using `[]` or the generic `Array<T>` type.
- Indexing starts from 0.
- Arrays are an ordered collection of elements.
*/

//Approach-1 (using literals/types )

//declaration
/* let names: string[] = [];

//initializing array values to varibales
names[0] = "Rahul";
names[1] = "Alex";
names[2] = "blake";
names[3] = "Casey";
names[4] = "Kitty";
names[5] = "Abhi";
console.log(names);
 */
//single line declaration + initialization
/* let names: string[] = ['Rahul', "Abhi", `Sunny`];  //declaration + initialization
console.log(names); */


//Approach-2 (using generic `Array<T>` type.)
let empNames: Array<string> = ["EMP1", "EMP2", "EMP3"];
let empNumbers: Array<number> = [102, 233, 121];
let empDetails: Array<string | number> = ["Alexa", 129];
let mixedData: Array<any> = [192, "Rama", true];
console.log(empNames);
console.log(empNumbers);
console.log(empDetails);
console.log(mixedData);
console.log(empNames[1]);
console.log(empNames.length);

//Example-1 (iteration over an array using a traditionally for loop or classis for loop)
console.log("=======================EMP NAMES=======================")
for (let i: number = 0; i < empNames.length; i++) {
    console.log(empNames[i]); //i is representing the index
}

//Example-2 (iteration using for in loop[- gives index])
console.log("=======================EMP NUMBERS=======================")
for (let i in empNumbers) {
    console.log(empNumbers[i]);
}

//Example-3 (iteration using for of loop[- gives index valus])
console.log("=======================EMP DETAILS=======================")
for (let j of empDetails) {
    console.log(j);
}   