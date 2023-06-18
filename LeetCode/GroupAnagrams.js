function GroupAnagrams(strs) {
    let sortedStrs = strs.map(word => word.split('').sort().join(''));
    let hash = {};

    for (let i = 0; i < strs.length; i++) {
        if (!hash[sortedStrs[i]]) {
            hash[sortedStrs[i]] = [strs[i]];
            console.log(Object.values(hash))
        } else {
            hash[sortedStrs[i]].push(strs[i])
        }
    }
    return Object.values(hash);
}

console.log(GroupAnagrams(["eat","tea","tan","ate","nat","bat"]));