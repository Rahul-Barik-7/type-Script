// Example-1 (Optional Properties)

interface Employee {
    id: number;
    name: string;
    department?: string;

    // getDetails():string {
    //     console.log(this.na)
    // }
}

let emp1: Employee = {
    id : 101,
    name: "Rahul"
}
let emp2: Employee = {
    id : 102,
    name: "Anvith",
    department: "Software Development"
}

console.log(emp1.id);
console.log(emp1.name);
console.log(emp1.department);
console.log("================================")
console.log(emp2.id);
console.log(emp2.name);
console.log(emp2.department);