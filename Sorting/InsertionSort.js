function insertionSort(arr) {
    var swaps = 0;
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
        swaps++;
    }
    return arr;
}

console.log(insertionSort([101, 758, 315, 730, 472, 619, 460, 479]));