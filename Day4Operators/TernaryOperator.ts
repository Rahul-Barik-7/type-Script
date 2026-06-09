//ternary or Conditional Opertaor
//syntax
//expression ? response1 : response2;

//Example-1
let a:number=100;
let b:number=200;

let res:number=(a<b) ? a:b;
//let res:any=(a>b) ? `Number is : ${a}`:`Number is : ${b}`;
console.log(res);

let age:number=1;

let person:string=(age>=18) ? "Adult" : "minor";
console.log(person);