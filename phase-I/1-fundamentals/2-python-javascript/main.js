let students = [
    {"name": "Dom", "score": 88},
    {"name": "Patty", "score": 73},
    {"name": "Nyzere", "score": 95},
    {"name": "Simon", "score": 61},
    {"name": "Albert", "score": 47},
    {"name": "Maya", "score": 100},
    {"name": "Jordan", "score": 55},
]

let sortedStuds = students.sort(
    (a, b) => b.score - a.score
)
console.log(sortedStuds)
// let nums = [1, 2, 3, 4];
// numsTwo = nums.map(num => num * 2)
// console.log(numsTwo)
// const isEven = num => num % 2 === 0
// let ans = nums.filter(isEven)
// console.log(ans)
// const mult_by_two = num => num * 2

// console.log(
//     mult_by_two(4)
// )

// function assignLtrGrade(score=null){
//     if(score === null){ return "F" }
//     let grades = {90:"A", 80:"B", 70:"C", 0:"F"}

//     if (score >= 90) {
//         return grades[90]
//     } else if (score >= 80){
//         return grades[80]
//     } else if (score >= 70){
//         return grades[70]
//     } else {
//         return "F"
//     }
// }
// for (let stud of students){
//     stud['ltr_grade'] = assignLtrGrade(stud.score)
// }
// console.log(students)

// let dakota = {
//     "instructors": 
//         {
//             "lead" : {
//             "name":"Francisco",
//             "email":"francisco@codeplatoon.org"
//             },
//         "instructor": {
//             "name":"kevin",
//             "email":"kevin@codeplatoon.org"
//         }},
//     "students":[
//         "Dom",
//         "Patty",
//         "Nyzere",
//         "Simon",
//         "Albert"
//     ]
// }
// console.log(dakota['instructors'])
// for (let type of Object.keys(dakota['instructors'])){
//     console.log(type)
// }
// let start = 0
// while (start <= 10){
//     console.log(start)
//     start += 2
// }

// let user = {
//     "name":"francisco",
//     "email":"fr@Fr.com"
// }
// console.log(Object.entries(user))
// for (let [key, val] of Object.entries(user)){
//     console.log(key, val)
// }

// console.log(Array(myArr.entries()))
// for (let num of myArr){
//     console.log(num)
// }
// for (let idx in myArr){
//     console.log(idx, myArr[idx])
// }


// can someone drink
// let user = {
//     "age": 20,
//     "has_id": false
// }
// if (user.age >= 21 || user.has_id){
//     console.log("can drink")
// }
// else{
//     console.log("can't drink")
// }

//  give us the grade that a student achieves based on score

// let score = 30
// console.log(score >= 50 ? "pass" : "fail")
// if (score >= 50){
//     console.log("pass")
// } else {
//     console.log("fail")
// }
// let grades = {
//     90: "A",
//     80 : "B",
//     70 : "C",
//     0 : "F",
// }

// let score = 99
// if (score >= 90){
//     console.log(grades[90])
// } else if (score >= 80){
//     console.log(grades[80])
// } else {
//     console.log("failed")
// }

// // key:value pairs
// let user = {
//     email : 'fr@fr.com',
//     password : 'fr'
// }

// console.log(Object.entries(user))

// user['name'] = 'Francisco'
// delete user['password']

// console.log(user)



// a collection of different data types
// O[1] Instant Operation
// let myArr = ["fruits", true, 8]
// myArr.pop(1)
// console.log(myArr) 

// let empty = null
// let neverCreated;

// console.log(neverCreated)

// let lever = false
// let aString = 'just a string'
// console.log('5' == 5)
// let num = 1

// console.log("EVEN OR NOT", num % 2)
// console.log(num * 2)
// console.log('DIV', num / 2)
// console.log('PWR', num ** 2)
// console.log('ADD', num + 2)
// console.log('SUB', num - 2)

// let myName = 'My name is Francisco'

// let myName2 = 'his' + myName.slice(2,)

// let num = 8

// let myExample = `The number in var is ${num * 4}`

// console.log(myExample)
