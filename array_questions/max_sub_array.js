/* 
    An Example
    Write a function called maxSubarraySum which accepts
    an array of integers and a number called n . The function
    should calculate the maximum sum of n consecutive
    elements in the array .

    maxSubarraySum ( [ 1,2,5,2,8,1,5 ] , 2 )
    maxSubarray Sum ( [ 1,2,5,2,8,1,5 ] , 4 ) // 17
    maxSubarraySum ( [ 4,2,1,6 ] , 1 ) // 6
    maxSubarraySum ( [ 4,2,1,6,2 ] , 4 ) // 13
    maxSubarray Sum ( [ ] , 4 ) // null
*/

const max_sub_array = (arr, n) => {
    if (arr.length < n) return null;

    let max_sum = 0;

    for (let index = 0; index < n; index++) {
        max_sum += arr[index];
    }

    for (let index = n; index < arr.length; index++) {
        let temp_max = max_sum - arr[index - n] + arr[index]

        max_sum = Math.max(max_sum, temp_max);
    }

    return max_sum;
};

max_sub_array ( [ 1,2,5,2,8,1,5 ] , 2 )