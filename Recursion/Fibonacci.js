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

// DYNAMIC PROGRAMMING (with memoisation)

const fibDP = (n) => {
    const memo = new Array(null);
    memo[0] = 0;
    memo[1] = 1;
    return fibDPAux(n, memo);
}

const fibDPAux = (n, memo) => {
    if (memo[n] !== null) {
        return memo[n];
    }
    memo[n] = fibDPAux(n-1, memo) + fibDPAux(n-2, memo);
    return memo[n];
}