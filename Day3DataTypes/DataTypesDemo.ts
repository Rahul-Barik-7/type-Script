// We have 2 types of data types in type script 

/* 
1) Primitive Data types (Build In)
Number 
String
Boolean
Null
undefined
Any
Union type
Void

2) Non primitive data types(Objects)
Array
class 
function
interface
touple etc

*/

//Number Data type 
//Represents both Integer and floating point numbers
console.log("****************Number program****************")
let number1:number=90;
let price:number=50.5;
let contactNumber:number=7077464596

console.log("number1: ",number1)
console.log("price: ",price)
console.log("contactNumber: ",contactNumber)


//String type
//represents of textual data 
//we have 3 approach to declare string
/* 
    singleQuote('')
    doubleQuote("")
    backtick(``)
*/
console.log("****************string program****************")
let firstName:string="Bijay"
let lastName:string='Barik'

//whenever you want to store other variable value into a variable use `${varibaleName1} ${varibaleName2}`

//let fullName=`firstName, lastName`  //wrong approach 
let fullName:string=`Full Name is: ${firstName} ${lastName}` //correct approach 
console.log(typeof fullName)
console.log(typeof(fullName)) // we have 2 approach to find the type of a variable
console.log(fullName)


//boolean type
//represents true or false
console.log("****************boolean program****************")
let isStudent:boolean=true
let hasJobs:boolean=false
console.log("is Student ? ",isStudent)
console.log("Has Jobs ? ",isStudent)

//null or undefined
//specical types when value is not present
console.log("****************null or undefinde****************")
let emptyValue:null=null;
console.log(emptyValue);
//emptyValue=10; //type issue 
//onsole.log(emptyValue)

let notEmpty:undefined=undefined
console.log(notEmpty);
//let cost:number
//console.log(cost) //undefined
const empty:null=null;
console.log(empty)

//any
//loses type script benifits and can store any type of data like java script
//not recomended use only when you dont want type safety
console.log("****************any type****************")
let anyValue:any="Rahul";
console.log(typeof anyValue)
anyValue=10;
console.log(typeof anyValue)
console.log(anyValue)

//union type-combine multiple type
console.log("****************union type****************")
let id:string|number
id="ABC72"
console.log(typeof id);
console.log(id)
id=50
console.log(typeof(id))
console.log(id)

//void type
//used for the function that does not return anthing
//void is optional
function show():void
{
    console.log("not returning anuy thing")
}
show();

function sum(x:number , y:number):number
{
    return(x+y)
}
let sumofvalue=sum(10,20)
console.log(sumofvalue)
