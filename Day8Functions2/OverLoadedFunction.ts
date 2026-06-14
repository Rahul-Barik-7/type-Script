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
