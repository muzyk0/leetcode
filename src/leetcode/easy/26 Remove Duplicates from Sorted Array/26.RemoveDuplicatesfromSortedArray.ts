/** for solution
 * runtime: 62ms
 * memory: 45.34MB
 * */
export function removeDuplicates2(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      nums[i + 1] = nums[j];
      i++;
    }

    j++;
  }

  nums.length = i + 1;

  return i + 1;
}

/** for solution
 * runtime: 56ms
 * memory: 45.04MB
 * */
export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  let k: number = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  nums.length = k;

  return k;
}
