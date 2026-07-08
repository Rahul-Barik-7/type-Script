//(2) : Inline Type object - We also define the datatype of the keys (TS) here we specifies the type
//there is no difference between type 1 and 2 (only diff is here we will add the data type)

//just creating the object and single line arrow method
let employee1: {
    name: string,
    role: string,
    contactNumber: number,
    getEmpDetails: () => string
} =
{
    name : "Rahul Barik",
    role : "Software Quality Engineer",
    contactNumber : 7077464596,
    getEmpDetails: function(){
        return `${this.name}, ${this.role}, ${this.contactNumber}`;
    }
}
console.log(employee1.getEmpDetails()); //Rahul Barik, Software Quality Engineer, 7077464596
console.log(employee1.name); //Rahul Barik
console.log(typeof employee1); //object


//in this approach we have one problem i.e (if you want to create employee object with same structure then we have to create multiple student object with along with structure)
//this is the repeatative activity because, for every student object we need to repeate the same structure

let employee2: {
    name: string,
    role: string,
    contactNumber: number,
    getEmpDetails: () => string
} =
{
    name : "Manoj Kumar",
    role : "Software Engineer",
    contactNumber : 7077464522,
    getEmpDetails: function(){
        return `${this.name}, ${this.role}, ${this.contactNumber}`;
    }
}
console.log(employee2.getEmpDetails()); //Manoj Kumar, Software Engineer, 7077464522

//to overcome this issue we can create object using aliases (ref: Object3.ts)
