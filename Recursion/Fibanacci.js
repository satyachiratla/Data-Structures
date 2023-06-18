// Recursive Solution
function fib(n) {
    if (n < 2) return n;

    return fib(n - 1) + fib(n - 2)
}

// console.log(fib(5));

//Iteration  Time Complexity - O(n) Linear Time
function fibanacci(n) {
  var result = [0, 1];

  for (let i = 2; i <= n; i++) {
    var a = result[i - 1];
    var b = result[i - 2];
    result.push(a + b);
  }
  return result[n];
}

console.log(fibanacci(15));

// Memoization Exponential Time O(2^n)
function memoize(fn) {
  var cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
    if (n < 2) return n;

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib)
console.log(fib(4))
