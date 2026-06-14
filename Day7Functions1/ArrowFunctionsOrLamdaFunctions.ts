//ArrowFunction also called as Lambda functions

/* 
Lambda refers to anonymous functions in programming.
Lambda functions are a concise mechanism to represent anonymous functions.
These functions are also called as Arrow functions.

There are 3 parts to a Lambda function.

1.Parameters - A function have parameters
2.The fat arrow notation/lambda notation (=>) - It is also called as the goes to operator
3.Statements - represent the functions instruction set

Syntax:
let variable= (parameters) =>
{
    //block of code    
}
variable();
*/


//Example-1 (Arrow Function with no return type and no params)
console.log("=================================================")
let greet = (): void => {
    console.log("this is a arrow functions!")
}
greet();


//Example-2 (Arrow Function with return type and params)
console.log("=================================================")
let msg = (name1: string, name2: string): string => {
    return `Provided Names are : ${name1} & ${name2}`
}
console.log(msg("Rahul", "Kitty"));


//Example-3 (Arrow Function with implicity return and without courly brashes)
console.log("=================================================")
let nameList = (name1: string, name2: string): string => `Provided Names are : ${name1} & ${name2}`
//implicity return we no need to add curly brashes and no need to ad retun keywork 
//this will work when only single return statement is present 
console.log(msg("Rahul", "Kitty"));


//Example-4 (Arrow Function with optional params)
console.log("=================================================")
let empDetails = (id: number, name?: string, email?: string): void => {
    console.log(id)
    if (name != undefined) {
        console.log(name)
    }
    if (email != undefined) {
        console.log(email)
    }
}
empDetails(10, "rahulbarik481@gmail.com")

//Example-5(Arrow function with default parameter)
console.log("=================================================")

let multiplication = (b1: number, b2: number = 5) => {
    console.log(b1 * b2)
}
multiplication(10);


//Example-6(Arrow function with rest parameter)
console.log("=================================================")
let rest = (...restParams: (number | string)[]): number => {
    return restParams.length
}
console.log(rest(10, 10, "Rahul"));
console.log(rest(10, 10, "Rahul", "euyui"));
console.log(rest(10, 10, "Rahul", "ueiyei"));
console.log(rest(10, 10, "Rahul", 10, 10));

