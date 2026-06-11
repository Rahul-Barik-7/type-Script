// Print the corresponding month name for a given month number.

let monthNumber: number = 13;

switch (monthNumber) {
    case 1: console.log("January")
        break;
    case 2: console.log("February")
        break;
    case 3: console.log("March")
        break;
    case 4: console.log("April")
        break;
    case 5: console.log("May")
        break;
    case 6: console.log("June")
        break;
    case 7: console.log("July")
        break;
    case 8: console.log("Agust")
        break;
    case 9: console.log("September")
        break;
    case 10: console.log("October")
        break;
    case 11: console.log("November")
        break;
    case 12: console.log("December")
        break;
    default: console.log(`${monthNumber} is not a valid Month Number, Please Enter a Valid Month Number in between 1-12`)
}