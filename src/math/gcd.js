/**
 * Greatest Common Divisor (GCD) — Euclidean Algorithm
 *
 * The GCD of two integers is the largest positive integer
 * that divides both numbers without a remainder.
 *
 * Euclidean algorithm: gcd(a, b) = gcd(b, a % b), base case gcd(a, 0) = a.
 *
 * Time Complexity:  O(log(min(a, b)))
 * Space Complexity: O(1) iterative, O(log(min(a, b))) recursive
 */

/**
 * Iterative Euclidean algorithm.
 */
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    var temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

/**
 * Recursive Euclidean algorithm.
 */
function gcdRecursive(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  if (b === 0) return a;
  return gcdRecursive(b, a % b);
}

/**
 * Least Common Multiple using GCD.
 * lcm(a, b) = |a * b| / gcd(a, b)
 */
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

module.exports = { gcd: gcd, gcdRecursive: gcdRecursive, lcm: lcm };
