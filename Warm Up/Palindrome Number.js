const n = 121;

// reverse the number and check if it is same as the number
// n % 10 will give the last digit of the number
// n/10 will remove the last digit
// check if reverse if equal to actual number if same return true if not, return false
const isPalindrome = (num) => {

    //handling negative numbers
    if(num < 0) return false;

    const originalNum = num;
    let reverse = 0;

    while(Math.floor(num) > 0){
        let reminder = Math.floor(num % 10);
        reverse = (10 * reverse) + reminder;
        num = num/10;
    }
    console.log("reverse: ", reverse);
    
    return originalNum === reverse;

}

console.log(isPalindrome(n));
console.log(isPalindrome(-121));