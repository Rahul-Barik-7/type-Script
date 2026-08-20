type empDetails = {
    empName: string;
    empAge: number;
    isManager: boolean;
    empSalary: number;
    getEmpDetails: () => string;
};

type officeAddress = {
    offAddress: string;
    offPincode: number;
};

type EmpOfficeDetails = empDetails & officeAddress & {
    getAllDetails: () => string;
};

// Employee-1
let emp1: empDetails = {
    empName: "Rajashree Jena",
    empAge: 22,
    isManager: true,
    empSalary: 500000,

    getEmpDetails() {
        return `
        ${this.empName}
        ${this.empAge}
        ${this.isManager}
        ${this.empSalary}
        `;
    }
};

let emp1AllDetails: EmpOfficeDetails = {
    empName: "Rajashree Jena",
    empAge: 22,
    isManager: true,
    empSalary: 500000,
    offAddress: "Noida",
    offPincode: 758945,

    getEmpDetails() {
        return `
        ${this.empName}
        ${this.empAge}
        ${this.isManager}
        ${this.empSalary}
        `
    },

    getAllDetails() {
        return `
        ${this.empName}
        ${this.empAge}
        ${this.isManager}
        ${this.empSalary}
        ${this.offAddress}
        ${this.offPincode}
        `
    }
};

// Employee-2
let emp2: empDetails = {
    empName: "Rahul Barik",
    empAge: 23,
    isManager: true,
    empSalary: 400000,

    getEmpDetails() {
        return `
        ${this.empName}
        ${this.empAge}
        ${this.isManager}
        ${this.empSalary}
        `;
    }
};

// Accessing employee details
console.log("Type of emp1 is:", typeof emp1);
console.log(emp1.getEmpDetails());
console.log(emp2.getEmpDetails());
console.log(emp1.empName);
console.log(emp1AllDetails.getAllDetails());