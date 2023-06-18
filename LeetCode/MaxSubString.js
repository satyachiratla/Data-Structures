function maxSubString(str) {
    let set = new Set();
    let left = 0;
    let right = 0;
    let maxSubString = 0

    while (right < str.length) {
        if (!set.has(str.charAt(right))) {
            set.add(str.charAt(right));
            maxSubString = Math.max(maxSubString, set.size);
            right++;
        } else {
            set.delete(str.charAt(left));
            left++;
        }
    }
    return maxSubString;
} 

console.log(maxSubString('vivek'))