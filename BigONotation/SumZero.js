// function sumZero(arr) {
//     for (let i = 0; i <= arr.length - 1; i++) {
//         for (let j = i + 1; j <= arr.length - 1; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }
// // Time Complexity - O(n^2) Quadratic
// console.log(sumZero([-3,-2,0,1,2,3]))


function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]]
        else if (sum > 0) right--
        else left++
    }
}
// Time Complexity - O(n) linear time
console.log(sumZero([-3,-2,0,1,2,7]))