/**
 * Jump Search
 *
 * Time Complexity:  O(sqrt(n))
 * Space Complexity: O(1)
 *
 * Prerequisite: The input array MUST be sorted.
 *
 * How it works:
 *   Instead of searching one element at a time (linear) or halving
 *   (binary), jump search skips ahead by a fixed step size (sqrt(n)).
 *   Once we find a block where the target could reside, we perform
 *   a linear search within that block.
 *
 *   Optimal step size is sqrt(n), which balances the number of jumps
 *   and the linear search within a block.
 */

function jumpSearch(arr, target) {
  var n = arr.length;
  var step = Math.floor(Math.sqrt(n));

  // Find the block where the target might be
  var prev = 0;
  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) {
      return -1; // Target is not in the array
    }
  }

  // Linear search within the identified block
  while (arr[prev] < target) {
    prev++;
    if (prev === Math.min(step, n)) {
      return -1; // Target is not in this block
    }
  }

  // Check if the element is found
  if (arr[prev] === target) {
    return prev;
  }

  return -1;
}

module.exports = jumpSearch;
