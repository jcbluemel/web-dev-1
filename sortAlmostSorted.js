"use strict";

/** Take an array with a single unsorted pair. Return array sorted  */

function sortAlmostSorted(nums) {

  let highSwapIndex;
  let lowSwapIndex;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      highSwapIndex = i;
      break;
    }
  }

  if (highSwapIndex === undefined) return nums;

  for (let j = nums.length - 1; j > 0; j--) {
    if (nums[j - 1] > nums[j]) {
      lowSwapIndex = j;
      [nums[highSwapIndex], nums[lowSwapIndex]] =
        [nums[lowSwapIndex], nums[highSwapIndex]];
      return nums;
    }
  }
}