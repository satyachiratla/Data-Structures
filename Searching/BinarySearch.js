function binarySearch(arr, val) {
    var start = 0
    var end = arr.length - 1
    var mid = Math.floor((start + end) / 2);

    while (val !== arr[mid] && start <= end) {
        if (val > arr[mid]) {
            start = mid + 1
        } else if (val < arr[mid]) {
            end = mid - 1
        }
        mid = Math.floor((start + end) / 2)
    }
    return val === arr[mid] ? mid : -1
}

console.log(binarySearch([4,8,12,17,24,37,63], 24))