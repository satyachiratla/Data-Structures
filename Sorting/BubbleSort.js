function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        var hasSwapped = false;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j + 1]) {
                hasSwapped = true
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if (!hasSwapped) break
    }
    return arr;
}

console.log(bubbleSort([5,1,2,3,4]));