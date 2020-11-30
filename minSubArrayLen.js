function minSubArrayLen(arr, targetSum) {
  // Initialize tracking variables
  let left = 0;
  let currSum = 0;
  let currLength = 0;
  let minLength = Infinity;

  for (let i = 0; i < arr.length; ++i) {
    currSum += arr[i];

    while (currSum - arr[left] >= targetSum) {
      currSum -= arr[left];
      left += 1;
    }

    if (currSum >= targetSum) {
      currLength = i - left + 1;
      minLength = Math.min(currLength, minLength);
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 1], 2)); // 1
console.log(minSubArrayLen([2, 1], 4)); // 0
console.log(minSubArrayLen([2, 3], 3)); // 1
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
