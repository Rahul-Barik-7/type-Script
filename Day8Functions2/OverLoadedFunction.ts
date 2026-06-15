//step1: write a signature of functions (a function without having a body called function signature )
//step2: We need to implement a function
//calling the functions

//Example-1 (different parameters type)
function getInfo(id: number): string;
function getInfo(name: string): string;

function getInfo(params: (number | string)): string {
    if (typeof params === "number") {
        return `User id is: ${params}`;
    }
    else {
        return `User Name is: ${params}`;
    }
}

console.log(getInfo(101));
console.log(getInfo("Kitty"));



//Example-2 (different number of parameters)
//function signature
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;
//function implementation
function add(a: number, b: number, c?: number): number {
    if (c != undefined) {
        return a + b + c;
    }
    return a + b;
}
console.log(add(10, 20));
console.log(add(10, 20, 10));



//Example-3 (different return types)
//function signature
function processInput(str: string): string;
function processInput(num: number): number;
//function implementation
function processInput(param: (number | string)): string | number {
    if (typeof param === "string") {
        return param.toUpperCase();
    }
    else {
        return param * 2;
    }
}
console.log(processInput(10));
console.log(processInput("Siddharth Sharma"));



//Example-4 ()
//function signature
function greet(name: string): string;
function greet(age: number): number;
function greet(isMarried: boolean): boolean;
//function implementation
function greet(input: (string | number | boolean)): (string | number | boolean) {
    if (typeof input === "string") {
        return `Name: ${input}`;
    }
    else if (typeof input === "number") {
        return `Age is: ${input}`
    }
    else {
        return input ? "Married" : "Un-Married";
    }
}
console.log(greet(false));


