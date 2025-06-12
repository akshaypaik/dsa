const arr = [5, 2, 4, 1];

const bubbleSort = (arr) => {

    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let noSwap = true;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            noSwap = false;
        }
        if (noSwap) break;
    }

    return arr;
}

// time complexity - O(n^2)
console.log(bubbleSort(arr));
