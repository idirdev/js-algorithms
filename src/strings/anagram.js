/**
 * Anagram Check
 *
 * Two strings are anagrams if they contain the same characters
 * in the same frequency, but in different order.
 * Examples: "listen" & "silent", "anagram" & "nagaram"
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1) — at most 26 lowercase letters in the map
 */

/**
 * Approach 1: Sort and compare.
 * If both strings, when sorted, produce the same result, they are anagrams.
 * Time: O(n log n) due to sorting.
 */
function isAnagramSort(str1, str2) {
  var clean1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  var clean2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  if (clean1.length !== clean2.length) return false;

  var sorted1 = clean1.split('').sort().join('');
  var sorted2 = clean2.split('').sort().join('');

  return sorted1 === sorted2;
}

/**
 * Approach 2: Character frequency map.
 * Count character frequencies in the first string, then decrement
 * for each character in the second. If all counts are zero, it's an anagram.
 * Time: O(n).
 */
function isAnagramMap(str1, str2) {
  var clean1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  var clean2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  if (clean1.length !== clean2.length) return false;

  var charCount = {};

  // Count characters in first string
  for (var i = 0; i < clean1.length; i++) {
    var char = clean1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrement for characters in second string
  for (var j = 0; j < clean2.length; j++) {
    var char = clean2[j];
    if (!charCount[char]) {
      return false; // Character not found or count exceeded
    }
    charCount[char]--;
  }

  return true;
}

module.exports = { isAnagramSort: isAnagramSort, isAnagramMap: isAnagramMap };
