// Given an array of numbers and a target value, return the indices
// of two numbers that add up to the target value. 
// You can assume there is always only one correct answer in the given array.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (nums, target) => {
    // The hash map stores the complement value
    // to the index.

    // We store the difference between the target and 
    // every value in the hashmap because 
    // the difference between the trget and the current value
    // will allow us to find the other pair that adds
    // up to the target value.
    const complements = {};

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] in complements){
            return [complements[nums[i]], i];
        }

        complements[target - nums[i]] = i;
    }
};