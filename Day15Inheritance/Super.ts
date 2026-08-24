/* 
    1. super() - is used to invoke parent class constructor
    2. super - is used to invoke parent class methods
    3. super can not be used to invoke parent class property(variable) butin java we can access
*/

class Parent {
    num: number = 10;

    constructor() {
        console.log("This is Parent class constructor");
    }

    display() {
        console.log("This is display method from parent class");
    }
}

class Child extends Parent {
    //overriding
    num: number = 20;

    constructor() {
        console.log("This is Child class constructor");
        super();
    }

    show() {
        console.log(this.num);  
        console.log("This is show method from child class")
    }

    display() {
        super.display();
        //console.log("This is display method from child class");
    }

}

let superDemo = new Child();
superDemo.show();
superDemo.display();