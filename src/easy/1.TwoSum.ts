/**
 * https://leetcode.com/problems/two-sum/
 * Video solution - https://www.youtube.com/watch?v=69RXb8yeDRw
 */
export const twoSum = function (nums: number[], target: number): number[] {
  let result: number[] = [];
  loop: for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }

      const sum = nums[i] + nums[j];

      if (sum === target) {
        result = [i, j];
        break loop;
      }
    }
  }
  return result;
};
