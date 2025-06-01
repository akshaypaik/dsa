const n = 4;

// i is responsible for rows and j is responsible for columns
// for (let i = 0; i < n; i++) {
//     let row = " ";
//     for (let j = 0; j < n; j++) {
//         row += "*";
//     }
//     console.log(row);
// }


// ******************************************************************************************************************************

// j < i + 1
// j <= i
// both are same

// for (let i = 0; i < 4; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }
// output
// *
// **
// ***
// ****

// ******************************************************************************************************************************

// for (let i = 1; i < 6; i++) {
//     let row = " ";
//     for(let j=1; j<=i;j++){
//         row += " " + j;
//     }
//     console.log(row);
// }
// for (let i = 0; i < 5; i++) {
//     let row = " ";
//     for (let j = 0; j <= i; j++) {
//         row += " " + (j + 1);
//     }
//     console.log(row);
// }
// output
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5



// ******************************************************************************************************************************

// for (let i = 0; i < 5; i++) {
//     let row = " ";
//     for (let j = 0; j <= i; j++) {
//         row += i + 1;
//     }
//     console.log(row);
// }
//output
// 1
// 22
// 333
// 4444
// 55555

// ******************************************************************************************************************************

// for (let i = 1; i <= 5; i++) {
//     let row = " ";
//     for (let j = 1; j <= 6 - i; j++) {
//         row += j;
//     }
//     console.log(row);
// }
// for (let i = 1; i <= 5; i++) {
//     let row = " ";
//     for (let j = 0; j <= 5 - i; j++) {
//         row += (j + 1);
//     }
//     console.log(row);
// }
// output
// 12345
// 1234
// 123
// 12
// 1

// ******************************************************************************************************************************

// for (let i = 0; i < 5; i++) {
//     let row = " ";
//     for (let j = 0; j < 5 - i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }
// output
// *****
// ****
// ***
// ** 
// *

// ******************************************************************************************************************************

for (let i = 0; i < 5; i++) {
    let row = " ";
    // adding empty spaces
    // first row will have 4 empty spaces n-(i+1) => 5-(0+1) => 4
    // second row will have 3 empty spaces and so on
    for (let j = 0; j < 5 - (i + 1); j++) {
        row += " ";
    }
    // adding stars
    // first row will have 1 star (i+1) => (0+1)
    // second row will have 2 star and so on
    for (let k = 0; k < i + 1; k++) {
        row += "*";
    }
    console.log(row);
}
//output
//     *
//    **
//   ***
//  ****
// *****
































