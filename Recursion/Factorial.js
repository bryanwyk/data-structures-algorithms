// Iterative solution
const factorialIterative = (n) => {
    let result = 1;
    for (let i=1; i<=n; i++){
        result = result * i;
    }
    return result;
}

// Recursive solution
const factorialRecursive = (n) => {
    // Base case
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorialRecursive(n-1);
    }
}

// Recursive solution with an accumulator (result).
// Notice how it accumulates results as it recurses (tail recursion). Nothing is done "on the way back".
// Whereas the normal recursive solution adds on the way back.
const factorial = (n) => {
    return factorial_aux(n, 1);
}

const factorial_aux = (n, result) => {
    if (n === 0) {
        return result;
    }
    return factorial_aux(n-1, result*n);
}