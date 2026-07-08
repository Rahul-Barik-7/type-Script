//(4) : using the classes (JS ES16/TS)

class EmployeeDetails {
    empFirstName: string;
    empLastName: string;

    //creating constructor
    constructor(empFirstName: string, empLastName: string) {
        this.empFirstName = empFirstName;
        this.empLastName = empLastName;
    }

    getEmpInfo(): string {
        return `${this.empFirstName} ${this.empLastName}`;
    }

    getEmpFullName(): string {
        return `${this.getEmpInfo()}`
    }
}

let emp1 = new EmployeeDetails("Rajashree", "jena");
let emp2 = new EmployeeDetails("Sunny", "Kumar");
let emp3 = new EmployeeDetails("Abhijit", "Kumar");
console.log(emp1);
console.log(emp1.getEmpInfo());

