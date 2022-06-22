const same_freqency = (num1, num2) => {
    let string_one = num1.toString();
    let string_two = num2.toString();

    if (string_one.length !== string_two.length) return false;

    let number_count = {};

    for (let index = 0; index < string_one.length; index++) {
        const number = string_one[index];

        number_count[number] = (number_count[number_count] || 1) + 1;
    }

    for (let index = 0; index < string_two.length; index++) {
        const number = string_two[index];
    
        if (!number_count[number]) return false;

        if (number_count[number]) number_count[number] -= 1;
    }

    return true;
};

/* Time Complexity O(n) */

// const is_same = same_freqency(123,341);
// const is_same = same_freqency(3589578,5879385);
// const is_same = same_freqency(123,341);
