//Check if a character is an uppercase vowel. using nested if else
let character:string ="A"

if(character>="A" && character<="Z"){
    if(character=="A" || character=="E" || character=="I" || character=="O" || character=="U"){
        console.log(character,": is an uppercase vowel.")
    }
    else{
        console.log(character,": is not an uppercase vowel.")
    }
}