//Passing an array variable to the function


//Example-1(Search an element in an arrays using function)
let empNums: Array<number> = [30, 23, 40];
console.log("=======================Example-1=======================")
function search(ele: number, empNums: number[]): boolean {
    for (let i: number = 0; i < empNums.length; i++) {
        if (ele === empNums[i]) {
            return true;  //element found 
        }
    }
    return false;
}
console.log(search(40, empNums));



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
let isPresent = searchNames("Dhooni", customerNames);
console.log(isPresent);



//Example-3 (A function takes the array and return the array)
console.log("=======================Example-3=======================")
let lowerChars: Array<string> = ["Java", "Python", "Type-Script"];
function convertUpper(lowerChars: string[]): string[] {

    let uppercaseCharacters: Array<string> = []; //create an empty Array variable which will store the Uppercase characters

    for (let i: number = 0; i < lowerChars.length; i++) {
        uppercaseCharacters[i] = lowerChars[i].toUpperCase();
    }
    return uppercaseCharacters;
}
console.log(convertUpper(lowerChars));

