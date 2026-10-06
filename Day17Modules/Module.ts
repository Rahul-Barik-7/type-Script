/* 
    1. Module contains reusable components like class, method , properties
    2. to create a component as a module we need to use export keywod and to access(wherever we want to use) then we need to use import key word 
*/



export let appName = "Calculator";

export function add(number1: number, number2: number):number {
    return (number1+number2);
}

export class Formatter {
    static toUpper(str : string) {
        return str.toUpperCase();
    }
}


