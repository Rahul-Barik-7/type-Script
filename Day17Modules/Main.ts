/*  
    (1) Approach 1
    import { appName } from "./Module";
    import { add } from "./Module"; 
    import { Formatter }  from "./Module"
*/

//(2)Approach 2 - single line import
//import { appName,add,Formatter } from "./Module";

//Approach-3 
import * as Utility from "./Module"


console.log(Utility.appName);
console.log(Utility.add(10,20));
console.log(Utility.Formatter.toUpper("kitty"));