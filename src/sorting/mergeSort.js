/**
 * Merge Sort
 *
 * Time Complexity:
 *   - Best:    O(n log n)
 *   - Average: O(n log n)
 *   - Worst:   O(n log n)
 *
 * Space Complexity: O(n) — requires additional space for merging
 *
 * Stable: Yes
 *
 * How it works:
 *   Divide-and-conquer algorithm. Recursively splits the array in half,
 *   sorts each half, then merges the two sorted halves back together.
 */

/**
 * Merge two sorted arrays into a single sorted array.
 */
function merge(left, right) {
  var result = [];
  var i = 0;
  var j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append remaining elements from whichever side is not exhausted
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

/**
 * Recursively sort the array using merge sort.
 */
function mergeSort(arr) {
  // Base case: arrays of length 0 or 1 are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  // Recursively sort each half, then merge them
  return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;
