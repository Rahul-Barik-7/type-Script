/*

1. forEach() - Executes a functions once for each array element
2. it takes function as parameter
3. syntax: array.forEach(function(currentValue, index, array){})
About 3 params:-
1. currentValue: The current element being processed in the array
2. index(optional): The index of the current element being processed in the array
3. array(optional): The array the current element belongs to (current used array name)

*/

let city: Array<string> = ['Puri', 'Bhubaneswar', 'Noida', 'Delhi', 'Gurugram'];

//Example-1(get the index of all the elements along with values)
console.log("");
console.log("==> Printing all the city name along with index values - using for in loop");

for (let i in city) {
    console.log(i, ":", city[i])
}

//Example-2
console.log("");
console.log("==> Printing all the city name along with index values - using forEach()");

city.forEach(function (element, index, city) {
    console.log(`${index}: ${element}`)
})

//Example-3
console.log("");
console.log("==> Printing all the city name along with index values - using forEach() & arrowFunction");

city.forEach((element, index) => {
    console.log(`${index}: ${element}`)
})

//Example-4
console.log("");
console.log("==> Printing all the city name with UPPERCASE - using forEach()");

city.forEach((element, index) => {
    let upperElement = element.toUpperCase();
    console.log(`${index}: ${upperElement}`)
})