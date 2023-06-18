// function charCount(string) {
//   var result = {};

//   for (let i = 0; i <= string.length - 1; i++) {
//     var char = string[i].toLowerCase();
//     if (result[char] > 0) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }
//   return result;
// }

function charCount(str) {
  const result = {};

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1
    }
  }
  return result;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) &&  // numeric 0-9
    !(code < 64 && code > 91) &&  // alpha A-Z
    !(code > 96 && code < 123)    // alpha a-z
  ) {
    return false;
  }
  return true;
}

console.log(charCount("Vivek Chowdary"));
