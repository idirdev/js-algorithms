/**
 * Heap Sort
 *
 * Time Complexity:
 *   - Best:    O(n log n)
 *   - Average: O(n log n)
 *   - Worst:   O(n log n)
 *
 * Space Complexity: O(1) — sorts in place
 *
 * Stable: No
 *
 * How it works:
 *   1. Build a max-heap from the input array.
 *   2. Repeatedly extract the maximum element from the heap
 *      (swap root with last element), reduce the heap size by one,
 *      and heapify the root to restore the max-heap property.
 */

/**
 * Maintain the max-heap property for a subtree rooted at index i.
 * @param {number[]} arr   - The array representing the heap
 * @param {number}   n     - Size of the heap
 * @param {number}   i     - Index of the root of the subtree to heapify
 */
function heapify(arr, n, i) {
  var largest = i;        // Initialize largest as root
  var left = 2 * i + 1;  // Left child index
  var right = 2 * i + 2; // Right child index

  // If left child exists and is greater than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child exists and is greater than current largest
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not the root, swap and continue heapifying
  if (largest !== i) {
    var temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    // Recursively heapify the affected subtree
    heapify(arr, n, largest);
  }
}

/**
 * Sort the array using heap sort.
 */
function heapSort(arr) {
  var n = arr.length;

  // Step 1: Build a max-heap.
  // Start from the last non-leaf node and heapify each node up to the root.
  for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Step 2: Extract elements from the heap one by one.
  // Move current root (maximum) to the end, shrink heap, re-heapify.
  for (var i = n - 1; i > 0; i--) {
    // Swap the root (max element) with the last element
    var temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // Heapify the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

module.exports = heapSort;
