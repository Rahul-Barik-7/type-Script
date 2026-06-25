let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = [`Apple`, "Banana", 'Mango', "Orange"];

console.log("==========printing arrays values==========");
console.log("Numbers Array :", numbers);
console.log("Strings Array :", fruits);

//lenght is a attribue not a method
console.log("")
console.log("==========printing arrays length==========");
console.log(numbers.length);
console.log(fruits.length);

//method-1 (push())
//add single or multiple elements to the end of an array
//syntax- array.push(element1,element2........,elementN)
console.log("")
console.log("==========push method==========");
numbers.push(6);
console.log("Updated Numbers Array", numbers);
numbers.push(6, 7, 8);
console.log("Updated Numbers Array", numbers)

//method-2 (pop())
//remove the last element from an array and we can capture it by storing that value in to a varible
//syntax- array.pop();
console.log("")
console.log("==========pop method==========");
let removeElement = fruits.pop();
console.log("Updated Fruits Array : ", fruits)
console.log("Removed Element : ", removeElement);


//method-3 (shift())
//remove the first  element from an array and we can capture it by string that value in to a varible
//syntax- array.shift();
console.log("")
console.log("==========shift method==========");
let firstNumber = numbers.shift();
console.log("Updated number array : ", numbers);
console.log("Removed Element : ", firstNumber);


//method-4 (unshift())
//add single or multiple elements to the begining  of an array
//syntax- array.unshift();
console.log("")
console.log("==========unshift method==========");
fruits.unshift("Kiwi", "Water-melon");
console.log("Updated Fruits list", fruits);


//method-5 (concat())
//combine two or more arrays
//syntax- array.concat();
console.log("")
console.log("==========concatinated method==========");
let concatArrayes=numbers.concat([1, 9],[10,11]);
console.log("concatinated Arrays: ",concatArrayes)

//method-6 (slice())
//Exract a section of an array
//ending index will be exclussive, (e.g. if 3 is ending index it will consider 2 (3 - 1 = 2))
//syntax- array.slice(start, end);
//exclussive means last provided value will not print (3-1=2) then 2nd index value will be printed
console.log("")
console.log("==========slice method==========");
let extractedArray = fruits.slice(1,4);
console.log("Afer slice: ", extractedArray);


//method-7 (splice())
//add or remove elements from an array (from anywhere) 
//syntax- array.splice(start, deleteCount, item1, ......, itemN);
//Example-1 (only deletion )
console.log("")
console.log("==========splice method (Example-1) ==========");
console.log("Current Elements in fruits array: ", fruits);
let removedElements = fruits.splice(1,3);
console.log("Updated Fruits Array: After splice(1,3) : ", fruits);
console.log("Removed Elements After Slice(1,3) : ", removedElements); //(1-index starting from , 3- removing 3 elements from 1st index)

//Example-2(no deletion only added )
console.log("==========splice method (Example-2) ==========");
console.log(fruits);
fruits.splice(1, 0, "Pineapple", "Grapes");  //(1-from 1st Index, 0-we are not removing any elements, "Pineapple", "Grapes"- newly added elements)
console.log("After splice(1, 0, 'Pineapple', 'Grapes') : ", fruits);

//Example-3 (deletion and added)
console.log("==========splice method (Example-3) ==========");
console.log(fruits);
fruits.splice(1,2,"coconout", "cherry");
console.log("Updated fruites list", fruits);

//method-8 (indexof())
//used to find the index of an element, if element not found then return -1
//syntax (fruits.indexOf(searchElement)     or   fruits.indexOf(searchElement, startingIndex))
console.log("")
console.log("==========indexof method==========");
console.log(fruits.indexOf("cherry")); //2  //it will search eacg and every element
console.log(fruits.indexOf("papaya")); //-1 because element is no found 
console.log(fruits.indexOf("Mango",2 )); //in this scenario it will start searching from 2nd index 

//method-9 (includes()) - it will check the element is exist or not 
//retrun value will be true or false
//syntax (fruits.indexOf(searchElement,from index))
console.log("")
console.log("==========includes method==========");
console.log(fruits.includes("Mango",2)); //true
console.log(fruits.includes("Lemon"));


//method-10 (tostring()) - it will convert the arrey to normal string 
//syntax (fruits.toString())
console.log("")
console.log("==========toString method==========");
console.log(numbers);
console.log(numbers.toString()); //2,3,4,5,6,6,7,8

console.log("")

let myArray: Array<string> = ['a', 'b', 'c', 'd', 'e'];
console.log("original myArray: ",myArray);
let updatedToStringArray = myArray.toString();
console.log("updatedToStringArray : ",updatedToStringArray);