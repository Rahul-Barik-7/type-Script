//Check if a number is divisible by both 2 and 3
let divNumber: number = 5;
if (divNumber % 2 === 0) {
    if (divNumber % 3 === 0) {
        console.log("number is divisible by both 2 and 3")
    }
    else {
        console.log("number is not divisible by both 2 but not by 3")
    }
}
else {
    console.log("number is not divisible by both 2 and 3")
}