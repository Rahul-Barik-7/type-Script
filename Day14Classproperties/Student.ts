/* 
    1. class creation
    2. Read only properties
    3. Optional Property
    4. Static Variable and methods
       4.1 static propertis & methos are common or shared across all the objects 
       4.2 static propertis & methos can be accessed through class name directly
       4.3 static propertis & methos can be modified using any object
       4.4 we can not use 'this' keyword for static properties, instaed we can use className
*/

class Student {
    readonly studentID: number; //readonly property (can be assigned once only inside the constructor)
    studentName: string; //regular property
    studentEmail?: string; //optional property (can be undefined)
    static studentSchoolName: string = "DAV Public School" ; // static variable shared among all instances/objects 

    constructor(sid: number, sname: string, semail?: string) {
        this.studentID = sid;
        this.studentName = sname;
        this.studentEmail = semail; //if you do not pass ? then it is undefined 
    }

    getStudentInfo() {
        console.log("Student ID: ", this.studentID);
        console.log("Student Name: ", this.studentName);

        if (this.studentEmail !== undefined) {
            console.log("Student Email: ", this.studentEmail);
        }
        else {
            console.log("Email is not provided !")
        }   

        console.log("School Name: ", Student.studentSchoolName);
    }

    //creating static method
    static modifySchoolName(newSchoolName: string){
        Student.studentSchoolName= newSchoolName; 
        //here we cannot access by using object because studentSchoolName belongs to objects also not only class so in this case we have to access by using class name 
        //static property we can directly acces by using class name
        return Student.studentSchoolName;
    }

}

let student1 =new Student(101,"Rajashree jena", "rajashree@gmail.com");
let student2 =new Student(102,"Rahul Barik");
student1.getStudentInfo();
console.log("================================")
student2.getStudentInfo();

//trying to modify the read only property using obejct
//student1.studentID = 103;  //Cannot assign to 'studentID' because it is a read-only property.


//accessing static property:
console.log("================================")
console.log("Original School Name")
student2.getStudentInfo();
Student.studentSchoolName = "Janata High School, Bantilo";
console.log("================================")
console.log("Modified School Name")
student2.getStudentInfo();
console.log("Modified School calling modifySchoolName() : ", Student.modifySchoolName("ABC School"));