// Space Complexity

// Examples:

// no space invloved
function findFifthElement(arr) {
    return arr[4]
}

// Space complexity is O(1)
function findMax(arr) {
    let maxElement = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > maxElement){
            maxElement = arr[i];
        }
    }
    return maxElement;
}

// Space complexity is O(n)
function doubleArray(arr) {
    let newDoubleArr = [];
    for (let i = 0; i < arr.length; i++) {
        newDoubleArr[i] = arr[i] * 2;
    }
    return newDoubleArr;
}

// If we are creating a 2D matrix array then space complexity is O(n^2)


























