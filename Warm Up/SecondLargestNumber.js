// const arr = [4, 9, 0, 2, 8, 7, 1];

// const arr = [-5, -2, -15, -25, -36]; // negative numbers edge case

const arr = [10, 20, 8, 9, 3, 5, 20];

const findSecondLargestNum = (arr) => {

    if (!arr || !Array.isArray(arr)) {
        return "please provide an array";
    }

    if (arr.length < 2) {
        return "please provide atleast 2 numbers in array to find the second largest";
    }

    let largestNum = -Infinity;
    let secondLargestNum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            secondLargestNum = largestNum;
            largestNum = arr[i];
        } else if (arr[i] > secondLargestNum && arr[i] !== largestNum) {
            secondLargestNum = arr[i];
        }
    }

    return secondLargestNum;

    // Not optimised
    // arr.sort((a, b) => {
    //     return a - b;
    // });

    // return arr[arr.length-2];

}

console.log(findSecondLargestNum(arr));
console.log(findSecondLargestNum());
console.log(findSecondLargestNum([1]));
