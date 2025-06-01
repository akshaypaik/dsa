for (let i = 0; i < 5; i = i + 1) {
    console.log("Hello Akshay Pai");
}

for (let i = 0; i < 5; i++) {
    console.log("Hello Akshay Pai ++");
}

// Infinite loop. because i will be assigned to i and then incremented but i will always stay as 0
// for (let i = 0; i < 5; i = i++) {
//     console.log("Hello Akshay Pai ++");
// }

for (let i = 0; i < 5; i = ++i) {
    console.log("Hello Akshay Pai pre ++");
}