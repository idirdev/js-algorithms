/**
 * Dijkstra's Shortest Path Algorithm
 *
 * Time Complexity:  O((V + E) log V) with a priority queue
 * Space Complexity: O(V)
 *
 * How it works:
 *   Finds the shortest path from a source vertex to all other vertices
 *   in a weighted graph with non-negative edge weights.
 *
 *   1. Initialize distances to all vertices as Infinity, source as 0.
 *   2. Use a priority queue to always process the closest unvisited vertex.
 *   3. For each neighbor, relax the edge (update distance if shorter path found).
 *
 * Graph representation: adjacency list with weights
 *   Example: { A: [{node: 'B', weight: 4}, {node: 'C', weight: 2}], ... }
 */

/**
 * Simple priority queue implemented with an array.
 * In production, use a binary heap for O(log n) operations.
 */
function PriorityQueue() {
  this.items = [];
}

PriorityQueue.prototype.enqueue = function(node, priority) {
  this.items.push({ node: node, priority: priority });
  this.items.sort(function(a, b) { return a.priority - b.priority; });
};

PriorityQueue.prototype.dequeue = function() {
  return this.items.shift();
};

PriorityQueue.prototype.isEmpty = function() {
  return this.items.length === 0;
};

/**
 * Find shortest distances from source to all other nodes.
 * @param {Object} graph  - Weighted adjacency list
 * @param {string} source - Starting node
 * @returns {Object} { distances, previous } - shortest distances and path reconstruction map
 */
function dijkstra(graph, source) {
  var distances = {};
  var previous = {};
  var pq = new PriorityQueue();

  // Initialize all distances to Infinity
  var nodes = Object.keys(graph);
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    distances[node] = Infinity;
    previous[node] = null;
  }

  distances[source] = 0;
  pq.enqueue(source, 0);

  while (!pq.isEmpty()) {
    var current = pq.dequeue();
    var currentNode = current.node;
    var currentDist = current.priority;

    // Skip if we've already found a shorter path
    if (currentDist > distances[currentNode]) {
      continue;
    }

    // Examine all neighbors
    var neighbors = graph[currentNode] || [];
    for (var j = 0; j < neighbors.length; j++) {
      var neighbor = neighbors[j];
      var newDist = distances[currentNode] + neighbor.weight;

      // If shorter path found, update distance and enqueue
      if (newDist < distances[neighbor.node]) {
        distances[neighbor.node] = newDist;
        previous[neighbor.node] = currentNode;
        pq.enqueue(neighbor.node, newDist);
      }
    }
  }

  return { distances: distances, previous: previous };
}

/**
 * Reconstruct the shortest path from source to target.
 * @param {Object} previous - Previous-node map from dijkstra()
 * @param {string} target   - Destination node
 * @returns {string[]} Path from source to target
 */
function getPath(previous, target) {
  var path = [];
  var current = target;

  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }

  return path;
}

module.exports = { dijkstra: dijkstra, getPath: getPath };
