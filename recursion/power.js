/* 
    Write a function called power which accepts a base and an exponent. 
    The function should return the power of the base to the exponent. 
    This function should mimic the functionality of Math.pow()
*/

const math_pow_recursion = (num, pow) => {
    if (pow === 1) return num;

    return num * math_pow_recursion(num, pow - 1);
};

console.log(math_pow_recursion(2, 3));