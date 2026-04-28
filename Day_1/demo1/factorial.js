function factorial(n) {
    if (n == 0) 
        return 1;      // base case
    return (n * factorial(n-1));  // recursive call(function is calling again and again itself)
}
console.log(factorial(5)); // 120