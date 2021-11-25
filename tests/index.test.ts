import { describe, it, expect } from 'vitest';

// Sorting
const bubbleSort = require('../src/sorting/bubbleSort');
const mergeSort = require('../src/sorting/mergeSort');

// Searching
const { binarySearch, binarySearchRecursive } = require('../src/searching/binarySearch');
const linearSearch = require('../src/searching/linearSearch');

// Strings
const { isPalindromeTwoPointer, isPalindromeReverse, isPalindromeRecursive } = require('../src/strings/isPalindrome');
const { reverseBuiltIn, reverseIterative, reverseRecursive, reverseReduce } = require('../src/strings/reverseString');
const { isAnagramSort, isAnagramMap } = require('../src/strings/anagram');

// Math
const { fibRecursive, fibIterative, fibMemoized } = require('../src/math/fibonacci');
const isPrime = require('../src/math/isPrime');
const { gcd, gcdRecursive, lcm } = require('../src/math/gcd');

describe('bubbleSort', () => {
  it('sorts an array of numbers', () => {
    expect(bubbleSort([5, 3, 1, 4, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  it('handles an already sorted array', () => {
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('handles an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles a single element', () => {
    expect(bubbleSort([42])).toEqual([42]);
  });

  it('handles negative numbers', () => {
    expect(bubbleSort([3, -1, 0, -5, 2])).toEqual([-5, -1, 0, 2, 3]);
  });
});

describe('mergeSort', () => {
  it('sorts an array of numbers', () => {
    expect(mergeSort([5, 3, 1, 4, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  it('handles an already sorted array', () => {
    expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('handles an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  it('handles duplicates', () => {
    expect(mergeSort([3, 1, 3, 1])).toEqual([1, 1, 3, 3]);
  });
});

describe('binarySearch', () => {
  it('finds an element in a sorted array', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
  });

  it('returns -1 for element not found', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(-1);
  });

  it('finds the first element', () => {
    expect(binarySearch([1, 2, 3], 1)).toBe(0);
  });

  it('finds the last element', () => {
    expect(binarySearch([1, 2, 3], 3)).toBe(2);
  });

  it('handles empty array', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });
});

describe('binarySearchRecursive', () => {
  it('finds an element in a sorted array', () => {
    expect(binarySearchRecursive([1, 3, 5, 7, 9], 7)).toBe(3);
  });

  it('returns -1 for element not found', () => {
    expect(binarySearchRecursive([1, 3, 5, 7, 9], 6)).toBe(-1);
  });
});

describe('linearSearch', () => {
  it('finds an element', () => {
    expect(linearSearch([4, 2, 7, 1, 9], 7)).toBe(2);
  });

  it('returns -1 for element not found', () => {
    expect(linearSearch([4, 2, 7, 1, 9], 5)).toBe(-1);
  });

  it('finds the first occurrence', () => {
    expect(linearSearch([1, 2, 3, 2], 2)).toBe(1);
  });
});

describe('isPalindrome', () => {
  const implementations = [
    { name: 'TwoPointer', fn: isPalindromeTwoPointer },
    { name: 'Reverse', fn: isPalindromeReverse },
    { name: 'Recursive', fn: isPalindromeRecursive },
  ];

  for (const { name, fn } of implementations) {
    describe(name, () => {
      it('detects palindromes', () => {
        expect(fn('racecar')).toBe(true);
        expect(fn('madam')).toBe(true);
        expect(fn('level')).toBe(true);
      });

      it('rejects non-palindromes', () => {
        expect(fn('hello')).toBe(false);
        expect(fn('world')).toBe(false);
      });

      it('is case-insensitive', () => {
        expect(fn('RaceCar')).toBe(true);
      });

      it('ignores non-alphanumeric characters', () => {
        expect(fn('A man, a plan, a canal: Panama')).toBe(true);
      });

      it('handles single character', () => {
        expect(fn('a')).toBe(true);
      });

      it('handles empty string', () => {
        expect(fn('')).toBe(true);
      });
    });
  }
});

describe('reverseString', () => {
  const implementations = [
    { name: 'BuiltIn', fn: reverseBuiltIn },
    { name: 'Iterative', fn: reverseIterative },
    { name: 'Recursive', fn: reverseRecursive },
    { name: 'Reduce', fn: reverseReduce },
  ];

  for (const { name, fn } of implementations) {
    describe(name, () => {
      it('reverses a string', () => {
        expect(fn('hello')).toBe('olleh');
      });

      it('handles empty string', () => {
        expect(fn('')).toBe('');
      });

      it('handles single character', () => {
        expect(fn('a')).toBe('a');
      });

      it('handles palindrome', () => {
        expect(fn('racecar')).toBe('racecar');
      });
    });
  }
});

describe('isAnagram', () => {
  const implementations = [
    { name: 'Sort', fn: isAnagramSort },
    { name: 'Map', fn: isAnagramMap },
  ];

  for (const { name, fn } of implementations) {
    describe(name, () => {
      it('detects anagrams', () => {
        expect(fn('listen', 'silent')).toBe(true);
        expect(fn('anagram', 'nagaram')).toBe(true);
      });

      it('rejects non-anagrams', () => {
        expect(fn('hello', 'world')).toBe(false);
      });

      it('is case-insensitive', () => {
        expect(fn('Listen', 'Silent')).toBe(true);
      });

      it('handles different lengths', () => {
        expect(fn('abc', 'abcd')).toBe(false);
      });
    });
  }
});

describe('fibonacci', () => {
  const implementations = [
    { name: 'Iterative', fn: fibIterative },
    { name: 'Recursive', fn: fibRecursive },
    { name: 'Memoized', fn: fibMemoized },
  ];

  for (const { name, fn } of implementations) {
    describe(name, () => {
      it('returns 0 for n=0', () => {
        expect(fn(0)).toBe(0);
      });

      it('returns 1 for n=1', () => {
        expect(fn(1)).toBe(1);
      });

      it('computes fibonacci correctly', () => {
        expect(fn(2)).toBe(1);
        expect(fn(5)).toBe(5);
        expect(fn(10)).toBe(55);
      });
    });
  }
});

describe('isPrime', () => {
  it('returns false for 0 and 1', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  it('returns true for 2 and 3', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
  });

  it('returns false for even numbers > 2', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(100)).toBe(false);
  });

  it('identifies prime numbers', () => {
    expect(isPrime(7)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(97)).toBe(true);
  });

  it('identifies non-prime numbers', () => {
    expect(isPrime(9)).toBe(false);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(25)).toBe(false);
  });

  it('returns false for negative numbers', () => {
    expect(isPrime(-5)).toBe(false);
  });
});

describe('gcd', () => {
  it('computes GCD of two numbers', () => {
    expect(gcd(12, 8)).toBe(4);
    expect(gcd(100, 75)).toBe(25);
  });

  it('returns a when b is 0', () => {
    expect(gcd(5, 0)).toBe(5);
  });

  it('handles negative numbers', () => {
    expect(gcd(-12, 8)).toBe(4);
  });
});

describe('gcdRecursive', () => {
  it('computes GCD recursively', () => {
    expect(gcdRecursive(12, 8)).toBe(4);
    expect(gcdRecursive(54, 24)).toBe(6);
  });
});

describe('lcm', () => {
  it('computes LCM of two numbers', () => {
    expect(lcm(4, 6)).toBe(12);
    expect(lcm(3, 5)).toBe(15);
  });

  it('handles equal numbers', () => {
    expect(lcm(7, 7)).toBe(7);
  });
});
