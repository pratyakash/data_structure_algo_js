function remove_duplicate(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        
        nums[count] = nums[i];
        count++;
    }
};

let nums = [0,0,1,1,1,2,2,3,3,4]

remove_duplicate(nums);


function remove_ele(nums, val) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            nums[count] = nums[i];

            count++
        }
    }
    return count;
};

remove_ele([3,2,2,3], 3)