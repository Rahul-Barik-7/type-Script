console.log("=======================WELCOME TO ARRAY=======================")
//Passing an array variable to the function


//Example-1(Search an element in an arrays using function)
//let empNums: Array<number> = [30, 23, 40];
let arr: number[] = [30, 23, 40];
function search (ele: number, arr: number []): boolean {
    for(let i=0; i<arr.length; i++) {
        if (ele === arr[i]) {
            return true;  //element found 
        }
    }
    return false;
}
console.log(search(40,arr));        
