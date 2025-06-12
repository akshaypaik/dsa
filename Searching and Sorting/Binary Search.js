// const arr = [0, 1, 5, 8, 12, 24, 36, 45, 52, 66], target = 12;
const arr = [-1, 0, 3, 5, 9, 12], target = 9;

const binarySearch = (arr, target) => {

    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2); 
        if (target > arr[middle]) {
            min = middle + 1;
        } else if (target < arr[middle]) {
            max = middle - 1;
        } else if (target === arr[middle]) {
            return middle;
        }
    }

    return -1;

}

console.log(binarySearch(arr, target));
