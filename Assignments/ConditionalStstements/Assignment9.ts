//Find the largest of three numbers.
let num1: number = 100, num2: number = 20, num3: number = 30;
if (num1 > num2 && num1 > num3) {
    console.log(`${num1} :is largest as compare to ${num2} : ${num3}`)
}
else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} :is largest as compare to ${num1} : ${num3}`)
}
else {
    console.log(`${num3} :is largest as compare to ${num1} : ${num2}`)
}