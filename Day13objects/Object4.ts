//(4) : using the classes (JS ES16/TS) - class is a collection of peoperties and methods

class EmployeeDetails {

    //the time of creating the class all the key value pair should be separated by semi-colon
    empFirstName: string;
    empLastName: string;

    //creating constructor
    constructor(empFirstName: string, empLastName: string) {
        this.empFirstName = empFirstName;
        this.empLastName = empLastName;
    }
    
    getEmpFullName(): string {

        return `${this.empFirstName} ${this.empLastName}`; 
    }
    getEmpInfo(): string {
        return `${this.getEmpFullName()}`
    }

}

let emp1 = new EmployeeDetails("Rajashree", "jena");
let emp2 = new EmployeeDetails("Rahul", "Barik");
console.log(emp1);
console.log(emp1.getEmpInfo());
console.log(emp2.getEmpInfo());
console.log(emp1.getEmpFullName());

//* Every objects accures there own varibles and methods but every objects derived from Same class