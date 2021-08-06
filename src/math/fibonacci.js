/**
 * Fibonacci Sequence
 *
 * The sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * Each number is the sum of the two preceding ones.
 * F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)
 */

/**
 * Approach 1: Naive recursive.
 * Time: O(2^n) — exponential, recalculates subproblems.
 * Space: O(n) — call stack depth.
 */
function fibRecursive(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

/**
 * Approach 2: Iterative.
 * Time: O(n) — single pass.
 * Space: O(1) — only two variables.
 */
function fibIterative(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  var prev = 0;
  var curr = 1;

  for (var i = 2; i <= n; i++) {
    var next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

/**
 * Approach 3: Memoized recursive.
 * Time: O(n) — each subproblem computed once.
 * Space: O(n) — memo table + call stack.
 */
function fibMemoized(n, memo) {
  if (!memo) memo = {};

  if (n <= 0) return 0;
  if (n === 1) return 1;

  if (memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);
  return memo[n];
}

module.exports = {
  fibRecursive: fibRecursive,
  fibIterative: fibIterative,
  fibMemoized: fibMemoized
};
