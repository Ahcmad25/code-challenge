// Time Complexity: O(n) (Linear)
// Space Complexity: O(1) (Constant)
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum_to_n_a(5));

// Time Complexity: O(1) (Constant)
// Space Complexity: O(1) (Constant)
function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}
console.log(sum_to_n_b(5));

// Time Complexity: O(n) (Linear)
// Space Complexity: O(n) (Linear)
function sum_to_n_c(n: number): number {
    if (n <= 0) return 0; 
    return n + sum_to_n_c(n - 1);
}
console.log(sum_to_n_c(5));
