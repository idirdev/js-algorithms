/**
 * Reverse a String - Multiple Approaches
 *
 * Time Complexity:  O(n) for all approaches
 * Space Complexity: O(n) — strings are immutable in JavaScript
 */

/**
 * Approach 1: Built-in methods
 * Split into array, reverse, join back.
 */
function reverseBuiltIn(str) {
  return str.split('').reverse().join('');
}

/**
 * Approach 2: Iterative with a loop
 * Build the reversed string character by character.
 */
function reverseIterative(str) {
  var reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

/**
 * Approach 3: Recursive
 * Take the last character and prepend it recursively.
 */
function reverseRecursive(str) {
  if (str.length <= 1) {
    return str;
  }
  return str[str.length - 1] + reverseRecursive(str.slice(0, -1));
}

/**
 * Approach 4: Using reduce
 * Accumulate characters in reverse order.
 */
function reverseReduce(str) {
  return str.split('').reduce(function(rev, char) {
    return char + rev;
  }, '');
}

module.exports = {
  reverseBuiltIn: reverseBuiltIn,
  reverseIterative: reverseIterative,
  reverseRecursive: reverseRecursive,
  reverseReduce: reverseReduce
};
