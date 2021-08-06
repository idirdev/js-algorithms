/**
 * Linear Search
 *
 * Time Complexity:
 *   - Best:    O(1) — target is the first element
 *   - Average: O(n)
 *   - Worst:   O(n) — target is last element or not present
 *
 * Space Complexity: O(1)
 *
 * How it works:
 *   Sequentially checks each element in the array until the target
 *   is found or the array is exhausted. Works on unsorted arrays.
 */

function linearSearch(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

module.exports = linearSearch;
