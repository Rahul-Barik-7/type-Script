//Example-4 (named function with Optional Params)
//one observation (if you make id as a optional then next name must be optional same for name also )
console.log("=================================================")
function displayDetails(id?: number, name?: string, email?: string)  //here question mark(?) make this variable optional 
{

    console.log("id: ", id)

    if (name != undefined) {
        console.log("Name: ", name)
    }

    if (email != undefined) {
        console.log("Email: ", email)
    }
}
//displayDetails(101, "Abhishek Chaturvedi", "abhishek@gmail.com");
//console.log("=================================================")
displayDetails(1, "Rahul Barik");  //passed partial params

