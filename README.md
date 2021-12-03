> **Archived** — Kept for reference. Not part of the current portfolio.

# js-algorithms

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Classic algorithm implementations in JavaScript for learning and reference.

## Table of Contents

- [Algorithms](#algorithms)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Contributing](#contributing)

## Algorithms

### Sorting

| Algorithm   | Best       | Average    | Worst      | Space  | Stable | File                          |
|-------------|------------|------------|------------|--------|--------|-------------------------------|
| Bubble Sort | O(n)       | O(n^2)     | O(n^2)     | O(1)   | Yes    | `src/sorting/bubbleSort.js`   |
| Merge Sort  | O(n log n) | O(n log n) | O(n log n) | O(n)   | Yes    | `src/sorting/mergeSort.js`    |
| Quick Sort  | O(n log n) | O(n log n) | O(n^2)     | O(log n) | No   | `src/sorting/quickSort.js`    |
| Heap Sort   | O(n log n) | O(n log n) | O(n log n) | O(1)   | No     | `src/sorting/heapSort.js`     |

### Searching

| Algorithm     | Best | Average    | Worst      | Space    | Requires Sorted | File                            |
|---------------|------|------------|------------|----------|-----------------|---------------------------------|
| Linear Search | O(1) | O(n)       | O(n)       | O(1)     | No              | `src/searching/linearSearch.js` |
| Binary Search | O(1) | O(log n)   | O(log n)   | O(1)     | Yes             | `src/searching/binarySearch.js` |
| Jump Search   | O(1) | O(sqrt(n)) | O(sqrt(n)) | O(1)     | Yes             | `src/searching/jumpSearch.js`   |

### Graph Algorithms

| Algorithm  | Time     | Space | Description                       | File                     |
|------------|----------|-------|-----------------------------------|--------------------------|
| BFS        | O(V + E) | O(V)  | Breadth-first traversal           | `src/graphs/bfs.js`      |
| DFS        | O(V + E) | O(V)  | Depth-first traversal             | `src/graphs/dfs.js`      |
| Dijkstra   | O((V+E) log V) | O(V) | Shortest path (weighted)    | `src/graphs/dijkstra.js` |

### String Algorithms

| Algorithm      | Time | Space | Description                     | File                          |
|----------------|------|-------|---------------------------------|-------------------------------|
| Reverse String | O(n) | O(n)  | Multiple reversal approaches    | `src/strings/reverseString.js`|
| Palindrome     | O(n) | O(1)  | Check if string is a palindrome | `src/strings/isPalindrome.js` |
| Anagram        | O(n) | O(1)  | Check if two strings are anagrams | `src/strings/anagram.js`   |

### Math

| Algorithm | Time         | Space | Description                  | File                   |
|-----------|--------------|-------|------------------------------|------------------------|
| Fibonacci | O(n)         | O(1)  | Recursive, iterative, memoized | `src/math/fibonacci.js` |
| Primality | O(sqrt(n))   | O(1)  | Optimized prime check        | `src/math/isPrime.js`  |
| GCD       | O(log(min(a,b))) | O(1) | Euclidean algorithm + LCM  | `src/math/gcd.js`      |

## Installation

```bash
git clone https://github.com/your-username/js-algorithms.git
cd js-algorithms
npm install
```

## Usage

Each algorithm is a standalone module that can be imported individually:

```javascript
var bubbleSort = require('./src/sorting/bubbleSort');
var result = bubbleSort([64, 34, 25, 12, 22, 11, 90]);
console.log(result); // [11, 12, 22, 25, 34, 64, 90]

var { binarySearch } = require('./src/searching/binarySearch');
var index = binarySearch([1, 3, 5, 7, 9, 11], 7);
console.log(index); // 3

var { dijkstra, getPath } = require('./src/graphs/dijkstra');
var graph = {
  A: [{ node: 'B', weight: 4 }, { node: 'C', weight: 2 }],
  B: [{ node: 'D', weight: 3 }],
  C: [{ node: 'B', weight: 1 }, { node: 'D', weight: 5 }],
  D: []
};
var result = dijkstra(graph, 'A');
console.log(result.distances); // { A: 0, B: 3, C: 2, D: 6 }
console.log(getPath(result.previous, 'D')); // ['A', 'C', 'B', 'D']
```

## Running Tests

```bash
npm test
npm run test:watch
npm run test:coverage
```

## Project Structure

```
js-algorithms/
  src/
    sorting/
      bubbleSort.js
      mergeSort.js
      quickSort.js
      heapSort.js
    searching/
      binarySearch.js
      linearSearch.js
      jumpSearch.js
    graphs/
      bfs.js
      dfs.js
      dijkstra.js
    strings/
      reverseString.js
      isPalindrome.js
      anagram.js
    math/
      fibonacci.js
      isPrime.js
      gcd.js
  package.json
  README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-algorithm`)
3. Commit your changes (`git commit -am 'Add new algorithm'`)
4. Push to the branch (`git push origin feature/new-algorithm`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

## 🇫🇷 Documentation en français

### Description
**js-algorithms** est une collection d'algorithmes et de structures de données classiques implémentés en JavaScript. Ce dépôt couvre les tris, la recherche, les graphes et les arbres, avec des explications claires et des tests unitaires. C'est une référence utile pour préparer des entretiens techniques.

### Installation
```bash
npm install
```

### Utilisation
```bash
npm test
```
