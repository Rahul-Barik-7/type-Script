//A Function passed as an argument to another function and executed later 

//Example-1
//this the function that takes callback function as parameter
function greetMessage(name: string, callback:(message: string) => void) {
    console.log(name);
    callback("Welcome to callback function"); //executing the callback function
}

//callback function
function showMessage(messge: string) {
    console.log(messge);
}

//calling the function by passing the callback function
greetMessage("Rahul", showMessage);