function rotateArray(nums, k) {
    k = k % nums.length;
    right = nums.slice(0, nums.length - k);  // [1,2]
    nums.splice(0, nums.length - k);  // [3,4,5]
    nums.push(...right);    // [3,4,5,1,2]
    return nums;
}

console.log(rotateArray([1,2,3,4,5], 3));