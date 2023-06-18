const fact = (n) => {
    if (n === 1) return 1;    // n = 4 So it is not true
    return n * fact(n - 1)    // return 4 * fact(3)
}                                     // return 3 * fact(2)
                                                // return 2 * fact(1)
console.log(fact(4))