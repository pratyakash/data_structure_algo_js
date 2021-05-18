/* 
    Program to find the minimum (or maximum) element of an array
*/

const get_minimum_in_array = array => {
    let minimum = array[0];

    array.forEach(num => {
        minimum = Math.min(minimum, num);
    })

    return minimum;
};

const get_maximum_in_array = array => {
    let maximum = array[0];

    array.forEach(num => {
        maximum = Math.max(maximum, num);
    })

    return maximum;
};


const minimum_result = get_minimum_in_array([2, 4, 5, 32, 45, 1, 34, 9, 12]);
const maximum_result = get_maximum_in_array([2, 4, 5, 32, 45, 1, 34, 9, 12]);
