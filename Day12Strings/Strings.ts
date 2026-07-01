// string - Text value or a combination of characters
/*
1. Single Quote - String Literal ('SingleQuote')
2. Double quote - String literal ("DoubleQuote")
3. backtick (``) - String template - `When we try to use a string variable inside another sting value ${variable}`

// index in string starts with 0

'' or "" or ``(backtick)
*/

//Declartion of strings

let str1: string = 'This is a string with single quote';
let str2: string = "This is a string with double quote";
let str3: string = `This is a string with back tick`;

console.log(str1);
console.log(str2);
console.log(str3);

let num: number = 10;

console.log("Number is:", num);  //10   //valid
console.log("Number is: ${num}"); //not valid
console.log('Number is: ${num}'); //not valid
console.log(`Number is: ${num}`); // Number is: 10   valid

let str: string = "Hello , Type-Script!";

//(1) length : used to find the length of the string
console.log("length of the string is : ", str.length);

//(2) toUpperCase() & toLowerCase() : used to convert the string to Uppercase and lowercase
console.log("UpperCase: ", str.toUpperCase());
console.log("LowerCase: ", str.toLowerCase());

//(3) charAt(index) & indexOf(string)
// charAt(index) will return the character using index
// indexOf(string) will return the index value using string

console.log("Character at 0th index", str.charAt(0));
console.log("Index of Type", str.indexOf("H"));

//(4) substring()- it will retrun some part of the string as per starting and ending index
//e.g. "Hello , Type-Script!" - current string
console.log(str.substring(0,5)); // here 2nd value is exclusive so for 2nd param index will start from 1)

//(5) include() - it will check the element is exist or not and then it will return the boolean value
// string value is case sensitive
console.log(str.includes("abc"));
console.log(str.includes("Type-Script"));
console.log(str.includes("!"));

//(6) startsWith() & endWith() - returns boolean value that is true or false 
// it will check the startig and ending value is match or not
console.log("Start with Hello: ", str.startsWith("Hello"));
console.log("ends with !: ", str.endsWith("!"));
console.log("Start with abc: ", str.endsWith("abc"));

//(7) replace - it will replace the string and will add some new string at the place of original string
//e.g. "Hello , Type-Script!" - current string
console.log(str.replace("Hello","Hii"));  //Hii , Type-Script!

//(8) - split() will break the strings in to multiple parts based on the delimeter
// retuns an array
let words1: string[] = str.split(" "); // here it is spliting asper space (i mean before space 1 part and after space one part)
console.log(words1); //[ 'Hello', ',', 'Type-Script!' ];
//ex-2
let words2: string[] = str.split("-");
console.log(words2); //[ 'Hello , Type', 'Script!' ]
console.log("2nd String : ", words2[1]) //2nd String :  Script!


//(9) - trim() , trimStart() & trimEnd()
// trim() will remove the starting and ending spaces 
// trimStart() will remove only starting spaces
// trimEnd() will remove the ending spaces

let myString: string = "   Welcome to typescript    ";
console.log("original String: ", myString); 
console.log(myString.trim()); //Welcome to typescript
console.log(myString.trimStart()); //Welcome to typescript    "
console.log(myString.trimEnd());  //   Welcome to typescript


//(10) - concat() will join the strings 
str1 = "Welcome ";
str2 = "to Type-Script";
str3 = " and java script";
console.log("After concatination: ", str1.concat(str2)); //After concatination:  Welcome to Type-Script
console.log("After concatination: ", str1+str2); //alternative but not recomended to use because it apply arithmatic operation
console.log("Welcome ".concat(str2)); //Welcometo Type-Script
console.log("Multi concatination: ", str1.concat(str2).concat(str3)); //Multi concatination:  Welcome to Type-Script and java script




