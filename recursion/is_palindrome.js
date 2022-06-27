/* Is Palindrome By Recursion */

const isPalindrome = string => {
    const original_string = string;

    const reverse_string = _str => {
        if (_str.length === 0) return ''

        return _str[_str.length - 1] + reverse_string(_str.slice(0, -1));
    };

    const reversed_string = reverse_string(string);

    if (reversed_string === original_string) return true;

    return false;
};

console.log(isPalindrome('awesome'))
console.log(isPalindrome('tacocat'))