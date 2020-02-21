let {
  vertices,
  negativeCycleGraph,
  negativeGraph,
  positiveGraph,
} = require('./example')

function findShortestPath(vertices, graph) {
  let memo = createMemo(vertices)

  let iterations = vertices.length - 1
  while (iterations > 0) {
    if (!iterateBellmanFord(graph, memo)) {
      iterations = 0
    }
    iterations -= 1
  }

  for (let vertex of vertices) {
    if (checkForNegativeCycles(vertex, graph, memo)) {
      return `Negative cycle!`
    }
  }

  return memo
}

function createMemo(vertices) {
  let memo = {}
  vertices.map(el => {
    if (el === 's') {
      return (memo[el] = 0)
    } else {
      return (memo[el] = Number.POSITIVE_INFINITY)
    }
  })
  return memo
}

function checkForNegativeCycles(vertex, graph, memo) {
  let negativeCycle = false
  const edges = graph.filter(edge => edge.from === vertex)

  // evaluate a potential negative cycle
  edges.forEach(edge => {
    const costTo = memo[edge.to]
    const costFrom = memo[edge.from] + edge.cost
    if (costTo > costFrom) {
      negativeCycle = true
    }
  })
  return negativeCycle
}

function iterateBellmanFord(graph, memo) {
  let doItAgain = false
  // for all vertices
  for (let fromVertex of vertices) {
    // get the outgoing edges from the current vertex
    const edges = graph.filter(edge => edge.from === fromVertex)
    // for each edge find the minimum distance
    edges.forEach(edge => {
      // evaluate the potential cost to reach the destination
      const potentialCostForDestination = memo[fromVertex] + edge.cost
      // if the potential cost < memoized cost to that destination
      const memoCost = memo[edge.to]
      if (potentialCostForDestination < memoCost) {
        // update memo table
        memo[edge.to] = potentialCostForDestination
        doItAgain = true
      }
    })
  }
  return doItAgain
}

console.log(findShortestPath(vertices, negativeCycleGraph))
console.log(findShortestPath(vertices, negativeGraph))
console.log(findShortestPath(vertices, positiveGraph))
