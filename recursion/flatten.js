/* Array Flatten By Recursion */

const flatten_by_recursion = arr => {
    let new_arr = []
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            new_arr = new_arr.concat(flatten_by_recursion(arr[i]))
        } else {
            new_arr.push(arr[i])
        }
    }
    return new_arr;
};

// console.log(flatten_by_recursion([1, 2, 3, [4, 5]]));

