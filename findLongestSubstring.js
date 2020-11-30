// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(str) {
  let currentLength = 0;
  let maxLength = 0;
  let left = 0;
  const seenLetters = {};

  // Iterate through string
  for (const letter of str) {
    // Add current letter to seen letters
    seenLetters[letter] = (seenLetters[letter] || 0) + 1;

    // Increase current length by 1
    currentLength += 1;

    // Keep moving left pointer until all letters are distinct
    while (!isDistinct(letter, seenLetters)) {
      seenLetters[str[left]] -= 1;
      left += 1;
      // Reset current length
      currentLength -= 1;
    }

    // Update max length if current length is greater than max length
    maxLength = Math.max(currentLength, maxLength);
  }

  return maxLength;
}

function isDistinct(letter, seenLetters) {
  return seenLetters[letter] === 1;
}

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     longest = Math.max(longest, i - start + 1);
//     seen[char] = i + 1;
//   }

//   return longest;
// }

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
