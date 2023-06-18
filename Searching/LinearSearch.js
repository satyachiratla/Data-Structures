function linearSearch(arr, val) {
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1
}

console.log(linearSearch([1, 2, 4, 5, 6], 2));
// Time Complexity - O(n) Linear Time