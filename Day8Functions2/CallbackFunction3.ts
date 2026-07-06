//Create a callback that reverses a string.


function reverseString(input: string, callback: (result: string) => void) :void {

    let reverse = input.split("").reverse().join("");
    callback(reverse);
}

function display(result: string): void {
    console.log("Reverse String:", result);
}

reverseString("TypeScript", display);


