/*
    Given an array arr[] and size of array is n and one another key x, and give you a segment size k. The task is to find that the key x present in every segment of size k in arr[].

    ===========================================================================================================================================
    Input :
    arr[] = { 3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3}
    x = 3
    k = 3
    Output : Yes
    There are 4 non-overlapping segments of size k in the array, {3, 5, 2}, {4, 9, 3}, {1, 7, 3} and {11, 12, 3}. 3 is present all segments.
    Input :
    arr[] = { 21, 23, 56, 65, 34, 54, 76, 32, 23, 45, 21, 23, 25}
    x = 23
    k = 5
    Output :Yes
    There are three segments and last segment is not full {21, 23, 56, 65, 34}, {54, 76, 32, 23, 45} and {21, 23, 25}.
    23 is present all window.
    Input :arr[] = { 5, 8, 7, 12, 14, 3, 9}
    x = 8
    k = 2
    Output : No
    ===========================================================================================================================================
*/

const check_pattern_in_array = (array, key_to_find, segment_size) => {
    let start_position = 0;
    let end_position = segment_size;

    let found = 'Yes';

    while(end_position <= (array.length + segment_size)) {
        const array_to_check = array.slice(start_position, end_position);

        if (array_to_check.indexOf(key_to_find) === -1) {
            found = 'No';
            break;
        }

        start_position = end_position;
        end_position = end_position + segment_size;
    };

    return found;
}


// const result = check_pattern_in_array([3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3], 3, 3);
// const result = check_pattern_in_array([21, 23, 56, 65, 34, 54, 76, 32, 23, 45, 21, 23, 25], 23, 5);
const result = check_pattern_in_array([ 5, 8, 7, 12, 14, 3, 9], 8, 2);
console.log("Result is => ", result);