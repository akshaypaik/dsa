let count = 0;

// Example 1
// my recursion
const callMe = (count) => {
    console.log("I am Akshay Pai");
    count++;
    // base case which stops recursion
    if (count < 5) {
        callMe(count);
    }
}
callMe(count);

// Example 2
const fun = (num) => {

    // base case. Always write base case at the top.
    if (num === 0) return;

    console.log("fun: ", num);
    num = num - 1;
    fun(num);

}
let a = 5;
fun(a);

// Example 3
const fun2 = (count, num) => {
    // base case. Always write base case at the top.
    if (count > num) return;

    console.log("fun2: ", count);
    fun2(++count, num);

}
fun2(1, 10);