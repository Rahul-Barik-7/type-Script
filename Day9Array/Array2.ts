//Passing an array variable to the function


//Example-1(Search an element in an arrays using function)
//let empNums: Array<number> = [30, 23, 40];
console.log("=======================Example-1=======================")
let arr: number[] = [30, 23, 40];
function search(ele: number, arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (ele === arr[i]) {
            return true;  //element found 
        }
    }
    return false;
}
console.log(search(40, arr));



//Example-2(Search an element in an arrays using function)
console.log("=======================Example-2=======================")
let customerNames: Array<string> = ["Rahcit", "Dhooni", "Hardhik"];
function searchNames(searchElement: string, customerNames: string[]): boolean {
    for (let j: number = 0; j < customerNames.length; j++) {
        if (searchElement === customerNames[j]) {
            return true;
        }
    }
    return false;
}
let isPresent = searchNames("Dhoon", customerNames);
console.log(isPresent);



//Example-3 (A function takes the array and return the array)
console.log("=======================Example-3=======================")

function convertUpper(lowerChars: string[]): string[] {

    let upercaseCharacters: Array<string> = [];

    for (let k: number = 0; k < lowerChars.length; k++) {
        upercaseCharacters[k] = lowerChars[k].toUpperCase();
    }
    return upercaseCharacters;
}
let lowerChars: Array<string> = ["Java", "Python", "Type-Script"];
console.log(convertUpper(lowerChars));

