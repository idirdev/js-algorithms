/**
 * Primality Test
 *
 * A prime number is a natural number greater than 1 that has
 * no positive divisors other than 1 and itself.
 *
 * Optimization: only check divisors up to sqrt(n).
 * If n has a factor larger than sqrt(n), then it must also have
 * a factor smaller than sqrt(n).
 *
 * Time Complexity:  O(sqrt(n))
 * Space Complexity: O(1)
 */

function isPrime(n) {
  // Edge cases
  if (n <= 1) return false;
  if (n <= 3) return true; // 2 and 3 are prime

  // Eliminate multiples of 2 and 3 early
  if (n % 2 === 0 || n % 3 === 0) return false;

  // Check remaining potential factors of the form 6k +/- 1.
  // All primes > 3 are of this form, so we only need to check
  // these candidates up to sqrt(n).
  for (var i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

module.exports = isPrime;
