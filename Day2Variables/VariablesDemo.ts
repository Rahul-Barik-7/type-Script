// Varibale : A varibale is a container which can hold some data
//in js or ts we can create a varible using 3 keywords (var , let , const)

//How to declare/assign value to a variable
//syntax -  keywords variableName:dataType=value  (here datatypes and ; is optional)
//example-  var empAge:number=30

var age = 30
console.log(age)
console.log("This is my 1st varibale program")

//(1)Scope (functional Scope(var) and block scope(let,const)) ***********

//Example-1 var(functional scope)
/* function varScope()
{
    if(true)
    {
        var message="var can be accessable!"    //accessing insde block scope
        console.log(message)
    }
    console.log(message) //accessing inside function scope
}
varScope() */

//Example-2 let & const (block scope)
/* function varScope()
{
    if(true)
    {
        let message1="let can be accessable!"    //accessing insde block scope
        const message2="const can be accessable!"  //accessing insde block scope
        console.log(message1)
        console.log(message2)
    }
    //console.log(message1) //unable to access let inside function scope
    //console.log(message2) //unable to access const inside function scope
}
varScope()  */

//Example-2
/* function scopeDiff() {
    if (true) {
        var num1 = 10;
        let num2 = 20;
        const num3 = 30;

        console.log(num1); //accessable
        console.log(num2); //accessable
        console.log(num3); //accessable
    }
    console.log(num1); //accessable
    // console.log(num2); //not accessable
    // console.log(num3); //not accessable
}
scopeDiff() */



//(2)only Declartion and value assignment******************************
//Ex-1: var
var x;
console.log(x);
x=30;
console.log(x);

//Ex-1: let 
let y;
console.log(y);
y="Rahul"
console.log(y);

//Ex-1: const (const must be initialized the time of declaration)
// const z; //incorrect
const z='c'; //correct
console.log(z); 


//(3) re-declaration ************
// var allows re-declarations
// let and const does't allows re declarations (making code safer)

//Ex-1(var allows re-declaration) (this is the main reason so we avoid to use var bcz type script mainly for type safety but this is deviating that )
var city="Noida";
var city="Delhi";
console.log(city);

//Ex-2(let not-allows re-declaration)
//let state="UP"
//let state="Odisha"
//console.log(state);

//Ex-3(const not-allows re-declaration)
//const empName="Sunny";
//const empName="Rahul";
//console.log(empName);


//(4) Re-initialization / re-assignment
// re-assignment is allowed for var and let but not allowed for const because const value is constant

//Ex-1 (var re-assignment) -- allowed
var empAge=60;
console.log(empAge);
empAge=90;
console.log(empAge);  

//Ex-2 (let re-assignment) -- allowed
let empDesignation="Developer"
console.log(empDesignation)
empDesignation="Tester"
console.log(empDesignation)

//Ex-3 (const re-assignment) -- not allowed
const empCode="EMP001"
console.log(empCode);
//empCode="EMP002"  //not possible
//console.log(empCode)


//(5) Hoisting
//Ex-1 : var
/* console.log(empSalary); //undefined
var empSalary=10000;
console.log(empSalary); */

//Ex-2 : let
/* console.log(empSalary); //Cannot access 'empSalary' before initialization
let empSalary=10000;
console.log(empSalary); */

//Ex-3 : const
/* console.log(empSalary); //Cannot access 'empSalary' before initialization
const empSalary=10000;
console.log(empSalary); */








