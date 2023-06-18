function sameSquares(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const freqCounter1 = {};
  const freqCounter2 = {};

  for (let val of arr1) {
    freqCounter1[val] > 0 ? freqCounter1[val]++ : (freqCounter1[val] = 1);
  }

  for (let val of arr2) {
    freqCounter2[val] > 0 ? freqCounter2[val]++ : (freqCounter2[val] = 1);
  }
  console.log(freqCounter1, freqCounter2);
  for (let key in freqCounter1) {
      if (!(key ** 2) in freqCounter2) return false
      if (freqCounter2[key ** 2] !== freqCounter1[key]) return false
  }
  return true
}

console.log(sameSquares([2, 1, 3, 2], [1, 4, 3, 4]));
// Time Complexity O(n) - Linear Time
