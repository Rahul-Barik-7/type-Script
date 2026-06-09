//print day name as per day number using switch case
/* 
switch(expression)
{
    case value1:statement;
    break;
    case value2:statement;
    break;
    default : statement;
} 
*/

let dayNumber:number=8;

switch(dayNumber)
{
    case 1:console.log("Monday")
    break
    case 2:console.log("Tuesday")
    break
    case 3:console.log("Wednesday")
    break
    case 4:console.log("Thusday")
    break
    case 5:console.log("Friday")
    break
    case 6:console.log("Saturday")
    break
    case 7:console.log("Sunday")
    break
    default:console.log("please enter a valid day number")
}