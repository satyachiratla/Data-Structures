function sum(n) {
    var total = 0;

    for (let i = 0; i <= n; i++) {  // O(n) linear time complexity
        total = total + i; // total += i;
    }
    return total;
}

function addition(n) {
    return n * (n + 1) / 2;  // O(1) constant time complexity
}

var t1 = performance.now();
// sum(100000)
addition(100000000)
var t2 = performance.now();
console.log(`Time Elapsed: ${t2 - t1 / 1000} seconds`)
