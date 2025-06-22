// const arr1 = [1, 3, 5, 7];
// const arr2 = [2, 4, 8, 9];

const arr = [8, 4, 5, 6, 9, 1, 3, 2];

// const mergeSortedArrays = (arr1, arr2) => {

//     let mergedArray = [];

//     const m = arr1.length;
//     const n = arr2.length;

//     let p1 = m - 1;
//     let p2 = n - 1;

//     for (let i = m + n - 1; i >= 0; i--) {
//         if (p2 < 0) {
//             mergedArray[i] = arr1[p1];
//             p1--;
//         } else if (p1 < 0) {
//             mergedArray[i] = arr2[p2];
//             p2--;
//         } else if (arr2[p2] > arr1[p1]) {
//             mergedArray[i] = arr2[p2];
//             p2--;
//         } else {
//             mergedArray[i] = arr1[p1];
//             p1--;
//         }
//     }

//     return mergedArray;

// }

const mergeSortedArrays = (left, right) => {

    let i = 0;
    let j = 0;
    let result = [];

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];

}

const mergeSort = (arr) => {

    if (arr.length <= 1) return arr;

    let length = arr.length;

    const middle = Math.floor(length / 2);

    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return mergeSortedArrays(left, right);

    // return mergeSort(left);

}

// console.log(mergeSortedArrays(arr1, arr2));

console.log(mergeSort(arr));
