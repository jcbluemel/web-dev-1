"use strict";

/**  Take an array of numbers, nums, and return an array with filled with
 *   all the numbers that occured at least minCount amount of times in nums.
*/
function findMultiples(nums, minCount) {

  let passingNums = [];
  let numsToCount = {};

  for (let num of nums) {
    if (Number.isFinite(num)) {
      numsToCount[num] = (numsToCount[num] || 0) + 1;
    }
  }

  for (let num in numsToCount) {
    if (numsToCount[num] >= minCount) {
      passingNums.push(Number(num));
    }
  }
  return passingNums;
}
