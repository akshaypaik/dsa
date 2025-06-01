//Write a function that searches for an element in an array and return the index, if the element is not present then just return -1.
const arr = [2, 5, 10, 28, 88, 99];

const findANumber = (arr, num) => {

    if (!arr || !Array.isArray(arr)) {
        return "please provide an array";
    }

    if (!num) {
        return "please provide a number to search";
    }

    let index = -1;

    for (let i = 0; i < arr.length; i++) {
        console.log(i);

        if (arr[i] === num) {
            index = i;
            break;
        }
    }

    return index;
}

console.log("the index is: ", findANumber(arr, 88));
console.log("the index is: ",findANumber());
console.log("the index is: ",findANumber(arr));


// ******************************************************************************************************************************

// Write a function that returns the number of negative numbers in an array.
const arr2 = [-1, 25, 24, 1, -12, 36, -24, 63, -2];

const findNumOfNegatives = (arr) => {


    if (!arr || !Array.isArray(arr)) {
        return "please provide an array to find negative numbers";
    }

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }

    return count;

}

let result = findNumOfNegatives(arr2);
let result2 = findNumOfNegatives();
console.log(result);
console.log(result2);

// ******************************************************************************************************************************

// Write a function that returns the largest number in an array

const arr3 = [5, 8, 0, 10, 17, 1, 99, -5];

// const arr3 = [-1,-10,-25,-99];   //largest is -1

// const arr3 = [-9, -19, -3];  // largest is -3

const findLargestNum = (arr) => {

    let largestNum = -Infinity;

    if (!arr || !Array.isArray(arr)) {
        return "please provide an array to find negative numbers";
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }

    return largestNum;

}

console.log(findLargestNum(arr3));

// ******************************************************************************************************************************

// Write a function that returns the largest number in an array

const arr4 = [5, 8, 0, 10, 17, 1, 99, -5, -20, 15];

// const arr3 = [-1,-10,-25,-99];   //largest is -1

// const arr3 = [-9, -19, -3];  // largest is -3

const findSmallestNum = (arr) => {

    let smallestNum = Infinity;

    if (!arr || !Array.isArray(arr)) {
        return "please provide an array to find negative numbers";
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNum) {
            smallestNum = arr[i];
        }
    }

    return smallestNum;

}

console.log(findSmallestNum(arr4));




