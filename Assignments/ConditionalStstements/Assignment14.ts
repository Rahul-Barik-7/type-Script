// Perform basic arithmetic operations based on user input.

let operator: string = "1";

let input1: number = 50, input2: number = 20;

switch (operator) {
    case "+": console.log(`Addition of ${input1} & ${input2} is: ${input1 + input2}`)
        break;
    case "-": console.log(`Subtraction of ${input1} & ${input2} is: ${input1 - input2}`)
        break;
    case "*": console.log(`Multiplication of ${input1} & ${input2} is: ${input1 * input2}`)
        break;
    case "/": console.log(`Division of ${input1} & ${input2} is: ${input1 / input2}`)
        break;
    case "%": console.log(`Module of ${input1} & ${input2} is: ${input1 % input2}`)
        break;
    default: console.log("Invalid operator provided")
}