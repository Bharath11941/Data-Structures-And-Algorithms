function removeDuplicate(nums) {
  for (let i = 1; i < nums.length; ) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums;
}

let arr = [1, 1, 2, 5, 4, 2, 5, 8];
console.log(removeDuplicate(arr));
