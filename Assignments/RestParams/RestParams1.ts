//print all students Name and id

function getStudent(...studentName: (string | number) []) {
    for (let i: number = 0; i < studentName.length; i++) {
        console.log(studentName[i])
    }
}
getStudent("Rahul","Kamal", "Raj", 10);