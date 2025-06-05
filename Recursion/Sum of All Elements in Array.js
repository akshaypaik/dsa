// const arr = [5, 3, 2, 0, 1];
const arr = [5, 5, 1, 4, 3, 2];

// const sum = (arr, n) => {

//     let length = arr.length;
//     if (n >= length) return 0;

//     return arr[n] + sum(arr, n + 1);

// }

const sum = (n) => {
    if (n === 0) return arr[0];
    return arr[n] + sum(n - 1);
}

// console.log(sum(arr, 0));
console.log("sum: ", sum(arr.length - 1));

const sumOdd = (n) => {
    const isEven = arr[n] % 2 === 0;
    if (n === 0 && isEven) return 0;
    if (n === 0) return arr[0];

    return isEven ? sumOdd(n - 1) : arr[n] + sumOdd(n - 1);

}

console.log("sumOdd: ", sumOdd(arr.length - 1));