// 0, 1, 1, 2, 3, 5, 8, 13...
// so fib(4) should give 3.
// 
// Cases:
// fib(0) = 0
// fib(1) = 1
// fib(n) = fib(n-1) + fib(n-2)

// Easiest to just implement recursively
const fib = (n) => {
    if ((n == 0) || (n == 1)) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

// With accumulator.
// More efficient, but harder to understand.
const fibAcc = (n) => {
    return fib_aux(n, 0);
}

const fibAux = (n, acc1, acc2) => {
    if (n===0) {
        return acc2;
    }
    return fibAux(n-1, acc1, acc1+acc2);
}