const sumRange = (num) => {
    if (num === 1) return 1;   // num === 3 So it is not true
    return num + sumRange(num - 1);  // return 3 + sumRange(2)
}                                                // return 2 + sumRange(1)
                                                            // return 1 
console.log(sumRange(3))