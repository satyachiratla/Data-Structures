function thirdMax(nums) {
    let max = nums[0];
    let secondMax = -Infinity;
    let thirdMax = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        if (num > max) {
            thirdMax = secondMax;
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            thirdMax = secondMax;
            secondMax = num;
        } else if (num > thirdMax && num < secondMax) {
            thirdMax = num
        }
    }
    return thirdMax === -Infinity ? max : thirdMax
}

console.log(thirdMax(3,2,1));