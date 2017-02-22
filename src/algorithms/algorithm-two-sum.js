let logger = require('../utils/logger.js');

let twoSumIndex = twoSum([2,3,4,5],7);
logger.info(twoSumIndex);
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let numsLength = nums.length;
    for(let i = 0;i < numsLength;i++) {
        for(let j = i+1;j < numsLength;j++) {
            if(nums[i] + nums[j] == target) {
                return [i,j];
            }
        }
    }
};
