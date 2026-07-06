/* 

1. Using object type - directly define the value of variable (JS/TS) we won't specifies the type
2. In Type-Script, 'object' type represents all the values that are not primitive type 

*/

//Example-1
//creating a object 
//in this syntax we can not write a method
/* let employee: object = {
    name: "Abhishek Chaturvedi",
    age: 25,
    salary: 50000,
    job: "Software Engineer"
}; */

//Example-2
//here you can create a method with key value pair 

let student = {
    name : "Sunny Kumar",
    age: 26,
    state: "Bihar",
    contactNumber: "9878987898",

    getDetails: function() {
        //console.log(this.name);
        return `${this.name}, ${this.age}, ${this.state}, ${this.contactNumber}`;
    }
}
console.log(typeof(student)); //object

//accessing the objet varibales and method
//Approach 1 (using . dot notation)
console.log(student.name);
console.log(student.age);
console.log(student.state);
console.log(student.contactNumber);
console.log(student.name, student.age, student.state, student.contactNumber)
// accessing the method from the object
console.log(student.getDetails());


//Approach 2 (using [] bracket notation) 
console.log(student["name"],student["age"]); //Sunny Kumar 26
console.log(student["getDetails"]());  //Sunny Kumar, 26, Bihar, 9878987898

//modify the value from the object 
student.name = "Abhishek Chaturvedi";
console.log("Modified Name is : ", student.name); //Modified Name is :  Abhishek Chaturvedi