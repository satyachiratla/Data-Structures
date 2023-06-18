function collectOddValues(arr) {
    var newArr = [];

    if (arr.length === 0) return newArr;

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr;
}

console.log(collectOddValues([1,2,3,4,5]))

/* [1].concat(collectOddValue([2,3,4,5]))                                 returns 1,3,5
           [].concat(collectOddValues([3,4,5]))                           returns 3,5
                   [3].concat(collectOddValues([4,5]))                    returns 3,5
                           [].concat(collectOddValues([5]))               returns 5
                                       [5].concat(collectOddValues([]))   returns 5
                                                 []  */