/**
 * Breadth-First Search (BFS)
 *
 * Time Complexity:  O(V + E) where V = vertices, E = edges
 * Space Complexity: O(V)    for the visited set and queue
 *
 * How it works:
 *   Explores all neighbors of a node before moving to the next level.
 *   Uses a queue (FIFO) to track which node to visit next.
 *   Guarantees shortest path in unweighted graphs.
 *
 * Graph representation: adjacency list (object of arrays)
 *   Example: { A: ['B', 'C'], B: ['A', 'D'], C: ['A'], D: ['B'] }
 */

/**
 * Perform BFS traversal from a starting node.
 * @param {Object} graph - Adjacency list representation
 * @param {string} start - Starting node
 * @returns {string[]} Nodes visited in BFS order
 */
function bfs(graph, start) {
  var visited = {};
  var queue = [start];
  var result = [];

  visited[start] = true;

  while (queue.length > 0) {
    // Dequeue the front node
    var node = queue.shift();
    result.push(node);

    // Get all adjacent neighbors
    var neighbors = graph[node] || [];

    for (var i = 0; i < neighbors.length; i++) {
      var neighbor = neighbors[i];
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }

  return result;
}

/**
 * Find the shortest path between two nodes using BFS.
 * @param {Object} graph - Adjacency list representation
 * @param {string} start - Starting node
 * @param {string} end   - Target node
 * @returns {string[]|null} Shortest path as array of nodes, or null
 */
function bfsShortestPath(graph, start, end) {
  var visited = {};
  var queue = [[start]];

  visited[start] = true;

  while (queue.length > 0) {
    var path = queue.shift();
    var node = path[path.length - 1];

    if (node === end) {
      return path;
    }

    var neighbors = graph[node] || [];
    for (var i = 0; i < neighbors.length; i++) {
      var neighbor = neighbors[i];
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        var newPath = path.concat([neighbor]);
        queue.push(newPath);
      }
    }
  }

  return null; // No path found
}

module.exports = { bfs: bfs, bfsShortestPath: bfsShortestPath };
