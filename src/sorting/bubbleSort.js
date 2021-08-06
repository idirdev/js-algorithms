/**
 * Bubble Sort
 *
 * Time Complexity:
 *   - Best:    O(n)   — when array is already sorted (with optimized flag)
 *   - Average: O(n^2) — nested iterations over the array
 *   - Worst:   O(n^2) — when array is reverse sorted
 *
 * Space Complexity: O(1) — sorts in place
 *
 * Stable: Yes — equal elements maintain their relative order
 *
 * How it works:
 *   Repeatedly steps through the list, compares adjacent elements,
 *   and swaps them if they are in the wrong order. Each pass "bubbles"
 *   the largest unsorted element to its correct position.
 */

function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // Last i elements are already in place
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap adjacent elements
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // If no swaps occurred in this pass, array is sorted
    if (!swapped) break;
  }

  return arr;
}

module.exports = bubbleSort;
