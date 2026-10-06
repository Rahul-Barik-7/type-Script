/* 
    In type Script we have 3 Access Modifier 
    1. public - Accessable anywhere 
    2. protected - accessable only within the Class and Child class
    3. private - Accessable only within the class
*/

class Person {
    public name : string; //Accessable anywher
    protected age : number; //accessable only within the Class and Child class
    private accountNumber: number;  //Accessable only within the class

    constructor(name: string, age : number, accountNumber: number){
        this.name=name;
        this.age=age;
        this.accountNumber=accountNumber;
    }

    displayInfo(){
        console.log("Name: ",this.name);
        console.log("Age: ",this.age);
        console.log("Account Number: ",this.accountNumber);
    }
}

class Employee extends Person {
    
    private empid : number ;
    constructor (name: string, age : number, accountNumber: number,empid: number){
        super(name,age,accountNumber);
        this.empid=empid
    }

    showWmpDetails(){
        console.log(this.name); //this is public so we can access
        console.log(this.age); //this is protected so we can access in child class
        //console.log(this.accountNumber); // unable to access because Property 'accountNumber' is private and only accessible within class 'Person'.
        console.log(this.empid); //able to acces because its a child class property & we are accesing inside the same class
    }
}

let emp1= new Employee("Rahul Barik",23, 898989347889,20003);
//emp1.displayInfo();
emp1.showWmpDetails();
console.log(emp1.name);