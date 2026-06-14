// Anonymous Function aslo called as Unnamed function Nameless functions

/* 
An Anonymous function is a function which does not have any name.
instead , it is assigned to a varibale , which acts as its name

Syntax:
let varibale = function(parameters)
{
    //function body
}
varibale(); //calling the functions

*/

//Example-1 (Anonymous function without using params)
let messge=function():string
{
    return "Hello TypeScript"
}
let printMessage=messge();
console.log(printMessage);

//Example-2 (Anonymous function using params)

let value=function(a:number,b:number):number
{
    return a*b;
}
let printVlaue=value(10,10);
console.log(printVlaue);