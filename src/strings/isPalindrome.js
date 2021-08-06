/**
 * Palindrome Check
 *
 * A palindrome reads the same forwards and backwards.
 * Examples: "racecar", "madam", "level"
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1) for two-pointer, O(n) for reverse approach
 */

/**
 * Approach 1: Two-pointer technique (most efficient).
 * Compare characters from both ends moving inward.
 */
function isPalindromeTwoPointer(str) {
  // Normalize: lowercase and remove non-alphanumeric characters
  var cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  var left = 0;
  var right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

/**
 * Approach 2: Reverse and compare.
 */
function isPalindromeReverse(str) {
  var cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  var reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

/**
 * Approach 3: Recursive check.
 */
function isPalindromeRecursive(str) {
  var cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  function check(s, left, right) {
    if (left >= right) return true;
    if (s[left] !== s[right]) return false;
    return check(s, left + 1, right - 1);
  }

  return check(cleaned, 0, cleaned.length - 1);
}

module.exports = {
  isPalindromeTwoPointer: isPalindromeTwoPointer,
  isPalindromeReverse: isPalindromeReverse,
  isPalindromeRecursive: isPalindromeRecursive
};
