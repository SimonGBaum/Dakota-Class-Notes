const names = ["Alice", "Ben", "Carla", "Derek", "Elena", "Frank", "Grace", "Hugo", "Isla", "Jack"];

// return true/false pending on whether the given parameter is found within the iterable structure

// worse scenarios:
// 1. value is note within the iterable structure
// 2. the value is the last ele within the iterable structure
const numbers = [3, 8, 15, 22, 34, 41, 50, 63, 77, 89];

const binarySearch = (arr, val) => {
    let leftPoint = 0
    let rightPoint = arr.length - 1
    let iteration = 1
    while (leftPoint <= rightPoint){
        let middlePoint = Math.floor((leftPoint + rightPoint) /2)
        iteration ++
        console.log(iteration, arr[middlePoint])
        if (arr[middlePoint] < val){
            leftPoint = middlePoint + 1
        } else if (arr[middlePoint] > val){
            rightPoint = middlePoint - 1
        } else {
            return true
        }
    }
    return false
}

console.log(
    binarySearch(numbers, 63)
)

// const simpleSearch = (arr, val) => {
//     let iteration = 1
//     for (let ele of arr){
//         console.log(iteration)
//         iteration++
//         if (ele === val){
//             return true
//         }
//     }
//     return false
// }

// console.log(
//     simpleSearch(numbers, 89)
// )