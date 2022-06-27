/* Reverse String by Recursion */

const reverse_string = string => {
    if (string.length === 0) return '';

    return string[string.length - 1] + reverse_string(string.slice(0, -1));
};

console.log(reverse_string('major'));