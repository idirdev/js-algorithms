/**
 * Binary Search
 *
 * Time Complexity:  O(log n)
 * Space Complexity: O(1) iterative, O(log n) recursive (call stack)
 *
 * Prerequisite: The input array MUST be sorted.
 *
 * How it works:
 *   Repeatedly divides the search interval in half. Compares the target
 *   with the middle element and narrows the search to the left or right
 *   half accordingly.
 */

/**
 * Iterative binary search.
 * @param {number[]} arr    - Sorted array to search
 * @param {number}   target - Value to find
 * @returns {number} Index of target, or -1 if not found
 */
function binarySearch(arr, target) {
  var low = 0;
  var high = arr.length - 1;

  while (low <= high) {
    // Avoid potential overflow with (low + high) / 2
    var mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Target not found
}

/**
 * Recursive binary search.
 * @param {number[]} arr    - Sorted array to search
 * @param {number}   target - Value to find
 * @param {number}   low    - Lower bound index
 * @param {number}   high   - Upper bound index
 * @returns {number} Index of target, or -1 if not found
 */
function binarySearchRecursive(arr, target, low, high) {
  if (low === undefined) low = 0;
  if (high === undefined) high = arr.length - 1;

  // Base case: element not found
  if (low > high) {
    return -1;
  }

  var mid = low + Math.floor((high - low) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, high);
  } else {
    return binarySearchRecursive(arr, target, low, mid - 1);
  }
}

module.exports = { binarySearch: binarySearch, binarySearchRecursive: binarySearchRecursive };
