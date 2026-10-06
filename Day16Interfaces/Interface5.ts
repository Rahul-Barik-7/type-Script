//* Class implements interface
/* 
    1. A class can extends another class
    2. A interface can extends another interface
    3. A class can implements another interface
    4. A interface can implement another class - this is no possible
*/

interface Vehicle {
    name : string;
    getColor():void;
}

class Truck implements Vehicle {
    name: string; //inherited from interface animal
    static price : number; // class property - belongs to DOG class it self
   
    constructor (name :string, price :number) {
        this.name = name;
        Truck.price = price;
    }
    
    getColor(): void {
        console.log("color is black")
    }
}

let truck1 = new Truck("BMW TRUCK", 2300000);
console.log(truck1.name);
console.log(Truck.price);
truck1.getColor();

