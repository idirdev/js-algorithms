/**
 * Depth-First Search (DFS)
 *
 * Time Complexity:  O(V + E) where V = vertices, E = edges
 * Space Complexity: O(V)    for the visited set and stack/call stack
 *
 * How it works:
 *   Explores as far as possible along each branch before backtracking.
 *   Can be implemented recursively (using the call stack) or iteratively
 *   (using an explicit stack).
 *
 * Graph representation: adjacency list (object of arrays)
 */

/**
 * Recursive DFS traversal.
 * @param {Object}   graph   - Adjacency list representation
 * @param {string}   node    - Current node to visit
 * @param {Object}   visited - Set of already visited nodes
 * @param {string[]} result  - Accumulator for visit order
 * @returns {string[]} Nodes visited in DFS order
 */
function dfsRecursive(graph, node, visited, result) {
  if (!visited) visited = {};
  if (!result) result = [];

  visited[node] = true;
  result.push(node);

  var neighbors = graph[node] || [];
  for (var i = 0; i < neighbors.length; i++) {
    var neighbor = neighbors[i];
    if (!visited[neighbor]) {
      dfsRecursive(graph, neighbor, visited, result);
    }
  }

  return result;
}

/**
 * Iterative DFS traversal using an explicit stack.
 * @param {Object} graph - Adjacency list representation
 * @param {string} start - Starting node
 * @returns {string[]} Nodes visited in DFS order
 */
function dfsIterative(graph, start) {
  var visited = {};
  var stack = [start];
  var result = [];

  while (stack.length > 0) {
    var node = stack.pop();

    if (visited[node]) continue;

    visited[node] = true;
    result.push(node);

    // Push neighbors onto stack (reverse order to match recursive behavior)
    var neighbors = graph[node] || [];
    for (var i = neighbors.length - 1; i >= 0; i--) {
      if (!visited[neighbors[i]]) {
        stack.push(neighbors[i]);
      }
    }
  }

  return result;
}

module.exports = { dfsRecursive: dfsRecursive, dfsIterative: dfsIterative };
