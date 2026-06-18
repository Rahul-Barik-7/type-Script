/**
* Tuples in TypeScript:
* A tuple is a fixed-length array where each element has a specific type.
* It helps in storing multiple fields of different data types together.
*/

//Example-1 (Tuple with 2 values string , number)
console.log("=======================Example-1=======================")
let person: [string, number] = ["Pavan", 102];
console.log(person[0]);
console.log(person[1]);
console.log(person);


//Example-2 (Tuple with 2 multiple values)
console.log("=======================Example-2=======================");
let users: [string, number, boolean, number, number | string] = ["Alex", 101, true, 12, 7077464596];
console.log(users);

//using for in loop
console.log("======using for in loop======");
for (let i in users) {
    console.log(users[i])
}

//using for of loop
console.log("======using for of loop======")
for (let i of users) {
    console.log(i)
}

//using traditional loop
console.log("======using using traditional loop======")
for (let i: number = 1; i < users.length; i++) {
    console.log(users[i])
}


//Example-3(Array with tuple)
console.log("======get list of tuple======")
let statesList: [number, string][] = [[101, "odisha"], [101, "tamil-Nadu"], [102, "kerala"], [103, "uttar-pradesh"], [104, "Punjab"]]
console.log(statesList);
console.log("======get tuple length======");
console.log(statesList.length); //5
console.log("======get 1st tuple list======");
console.log(statesList[0]); // [ 101, 'odisha' ]
console.log("======get specific index value from tuple======");
let singleStateList = statesList[0]; 
console.log(singleStateList[1]); //odisha

console.log("======get tule value using loop======");
for (let i in singleStateList) {
    console.log(singleStateList[i]);
}