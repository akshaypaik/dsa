const n = 16;

// my solution
// const powerOfTwo = (n) => {

//     if (n === 1) return true;
//     if (n < 1) return false;
//     // odd numbers
//     if (n % 2 !== 0) return false;

//     return 2 * powerOfTwo(n / 2) === 0 ? false : true;


// }

const powerOfTwo = (n) => {

    if (n === 1) return true;
    if (n < 1) return false;
    // odd numbers
    if (n % 2 !== 0) return false;

    return powerOfTwo(n / 2);


}


console.log(powerOfTwo(n));
