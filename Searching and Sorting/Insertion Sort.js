const arr = [7, 1, 5, 12, -10, 0, 4, 3, 2];

// time complexity - O(n^2)
const insertionSort = (arr) => {

    const n = arr.length;

    for (let i = 1; i < n; i++) {

        let curr = arr[i];
        let prev = i - 1;

        while ((curr < arr[prev]) && prev >= 0) {
            arr[prev + 1] = arr[prev];
            prev--;
        }

        arr[prev + 1] = curr;

    }

    return arr;
}

console.log(insertionSort(arr));
