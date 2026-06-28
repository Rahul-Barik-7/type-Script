let a: number = 2
let b: number = 10

//if you want to make a single line variable declaration
let c: number = 20, d: number = 40

//Arithmatic Operation
console.log("************Arithmatic Operation**************")
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(5 ** 2)

//Assignment operators or (short hand operators)
console.log("************Assignment operators or (short hand operators)**************")
a = 10
b = 5

a = a + b; // a+=b;
console.log(a);
a -= b; //a=a-b;
console.log(a);
a *= b; //a=a*b;
console.log(a);
a /= b; //a=a/b
console.log(a);
a %= b; //a=a%b;
console.log(a);


//Relational or comparison operators(returns true or false)
//(<, >, <=, >=, ==, !=, ===(strict equality))
console.log("************Relational/comparision operaators**************")

a = 10, b = 20 //re assigning the variable value 

console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);
console.log(a == b);
console.log(a != b);

//different between ==(compares only value) and ===(compare the value and types)
console.log("************different between == and ===*************")
let num1: any = 10;
let num2: any = "10";
console.log(num1 == num2); //(only compare the value )
console.log(num1 === num2); //(compare the value and types)



//Logical Operators(used only between boolean variables) (||, && , ! ))
//return either true or false
console.log("************Logical Operator*************")
/* 
    *truth table
    b1    b2   &&   ||    !(for b1)      !(for b2)
    t     t    t    t         f              f
    t     f    f    t         f              t
    f     t    f    t         t              f
    f     f    f    f         t              t
*/

let b1: boolean = true;
let b2: boolean = false;

console.log(b1 && b2);
console.log(b1 || b2);
console.log(!b1);
console.log(!b2);

//combinations of logical and Relational operators 
console.log("************combinationo of logical and Relational operator*************")
console.log(20 > 10 || 10 > 5);
console.log(20 > 10 && 10 > 20);