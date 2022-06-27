/* Factorial by Iteration */

const factorial_by_iteration = num => {
    let factorial = 1;

    for (let i = num; i > 1; i--) {
        factorial = factorial * i;
    }

    return factorial;
};

// console.log(factorial_by_iteration(4));

/* Factorial By Recursion */

const factorial_by_recursion = num => {
    if (num === 1) return 1;

    return num * factorial_by_recursion(num - 1);
};

// console.log(factorial_by_recursion(4))