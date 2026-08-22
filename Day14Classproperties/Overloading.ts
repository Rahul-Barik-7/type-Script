//Method Overloading and constructor overloading in type script 
//Method Overloading:  method can have multiple method signature but there will be a comman method implementation 
//Constructor overloading:  constructor can have multiple  signature but there will be a comman  implementation 

class Calculator {

    //Constructor overloading:
    constructor();
    constructor(num1: number, num2: number);

    constructor(num1?: number, num2?: number) {
        if (num1 !== undefined && num2 !== undefined) {
            console.log("Sum of num1 & num2 is : ", (num1 + num2));
        }
        else {
            console.log("Default constructor called")
        }
    }

    //Method Overloading
    add(a: number, b:number):number;
    add(a: number, b:number, c: number):number;

    add(a: number, b:number, c?: number): number{
        if(c !== undefined){
            return a+b+c;
        }

        return a+b;
    }
}

let cal1 = new Calculator();
let cal2 = new Calculator(10,20);

//calling method 
console.log("Sum of num1 & num2 is : ", cal1.add(10,20));
console.log("Sum of num1 , num2 & num3 is : ", cal2.add(10,20,30));