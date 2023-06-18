function validateAnagram(first, second) {
    if (first.length !== second.length) {
        return false
    }

    const lookup = {}

    for (let i = 0; i <= first.length - 1; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter]++ : lookup[letter] = 1
    }
    console.log(lookup)
    for (let i = 0; i <= second.length - 1; i++) {
        let letter = second[i];
        if (!lookup[letter]) return false
        else lookup[letter]--
    }
    console.log(lookup)
    return true;
}

console.log(validateAnagram('vivek', 'vvkiv'))

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for ( let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;
}

console.log(anagrams('rail', 'safety'));

function buildCharMap(str) {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
} 

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagrams('rail', 'ilaj'));
