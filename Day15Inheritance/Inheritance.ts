
/* 
Inheritance -
1. Whatever variable, methods we create in a class , we can access/reuse it in another class that is inheritance
2. A class can re-use  the property and methods of a another class 
3. inheritance is a mechanism where one class (child) can inherit the properties and methods of another class(parent)
4. inh eritance allows to re use the functionality of an existing class without re-wrighting it 

    A - parent class (properties & methods)
    B extends A - child class (now 'B' can access the properties of parent class 'A') - and 'B' can have their properties and methods 
5. So whatever method we create on parent class , if we recreate the same method without changing the signature then we call it sa method overriding concept 
    5.5  The method must have same name , return type, params

*/

class Car {
    name: string;
    color: string;
    model: string;

    constructor(name: string, color: string, model: string) {
        this.name = name;
        this.color = color;
        this.model = model;
    }

    start() {
        console.log("Car Started..")
    }

    stop() {
        console.log("Car stopped..")
    }

    displayInfo() {
        console.log(`${this.name}- ${this.color}- ${this.model}`);
    }
}

//child -1
class Honda extends Car {

    year: number;

    constructor(name: string, color: string, model: string, year: number) { // here we need to pass the parent class properties 
        super(name, color, model) // using super() because it will invoke the parent class properties
        this.year = year
    }

    start() {
        console.log("Honda Started..")
    }

    yearOfManufacturing() {
        console.log(`${this.name}- ${this.color}- ${this.model} -${this.year}`);
    }

}

//child-2
class Maruti extends Car {

    year: number;

    constructor(name: string, color: string, model: string, year: number) { // here we need to pass the parent class properties 
        super(name, color, model) // using super() because it will invoke the parent class properties
        this.year = year
    }

    start() {
        console.log("Maruti Started..")
    }

    yearOfManufacturing() {
        console.log(`${this.name}- ${this.color}- ${this.model} -${this.year}`);
    }

}


//usage 
//creating Honda class object
let honda = new Honda("Honda", "Red", "Honda City", 2020);
console.log(honda.name);
console.log(honda.color);
console.log(honda.model);
console.log(honda.year);

honda.start();  //Honda Started..
//here I'm calling start() which is present in both Honda(child class) and Car(Parent class) so question is which method will be executed
//so always whichever new method is overriden that will be executed, child class method will be executed

honda.displayInfo(); // you can acces parent class method 




