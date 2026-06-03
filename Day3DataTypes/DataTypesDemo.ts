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
