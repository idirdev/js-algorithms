/**
 * Quick Sort
 *
 * Time Complexity:
 *   - Best:    O(n log n) — balanced partitions
 *   - Average: O(n log n)
 *   - Worst:   O(n^2)     — when pivot is always smallest/largest element
 *
 * Space Complexity: O(log n) — recursive call stack
 *
 * Stable: No
 *
 * How it works:
 *   Picks a "pivot" element and partitions the array so that all elements
 *   less than the pivot come before it, and all elements greater come after.
 *   Then recursively sorts the two partitions.
 */

/**
 * Partition the array around a pivot (last element).
 * Returns the index of the pivot after partitioning.
 */
function partition(arr, low, high) {
  var pivot = arr[high];
  var i = low - 1;

  for (var j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      // Swap arr[i] and arr[j]
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // Place pivot in its correct position
  var temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
}

/**
 * Recursive quick sort implementation.
 */
function quickSort(arr, low, high) {
  if (low === undefined) low = 0;
  if (high === undefined) high = arr.length - 1;

  if (low < high) {
    var pivotIndex = partition(arr, low, high);

    // Recursively sort elements before and after the pivot
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }

  return arr;
}

module.exports = quickSort;
