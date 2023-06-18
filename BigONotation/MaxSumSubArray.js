// function maxSumSubArray(arr, num) {
//     if (num > arr.length) return null;
//     let max = -Infinity;

//     for (let i = 0; i < arr.length - num + 1; i++) {
//         let sum = 0;
//         for (j = 0; j < num; j++) {
//             sum += arr[i + j]
//         }
//         if (sum > max) {
//             max = sum
//         }
//     }
//     return max;
// }

function maxSumSubArray(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (num > arr.length) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let j = num; j < arr.length; j++) {
        tempSum = tempSum - arr[j - num] + arr[j];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}

console.log(maxSumSubArray([2,6,9,2,1,8,5,6,3], 3))