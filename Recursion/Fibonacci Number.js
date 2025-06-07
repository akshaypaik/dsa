const n = 6;

// Time complexity is O(2^n)
const fibonacci = (n) => {

    if (n == 0) return 0;
    if (n == 1) return 1;

    n = fibonacci(n - 1) + fibonacci(n - 2);

    return n;


}

console.log(fibonacci(n));
