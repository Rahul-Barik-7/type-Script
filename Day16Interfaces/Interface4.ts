//Extending interfaces

interface Animal {
    name : string;
}

interface Dog extends Animal {
    color : string;
}

let myDog: Dog = {
    name : "Tommy",
    color : "White"
}

console.log(myDog.name);
console.log(myDog.color);