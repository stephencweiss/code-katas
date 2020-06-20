/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
    // build a graph of N nodes
    // for each element of times, add to the graph as the appropriate edge
    // now that we have our graph, we find our entry point
    const graph = buildGraph(N)
    times.forEach(([sourceNode, targetNode, timeToTravel]) =>
        graph.nodes.get(sourceNode).addEdge(targetNode, timeToTravel)
    )

    let maximumTime = Number.NEGATIVE_INFINITY
    const root = graph.nodes.get(K)
    let visitedNodes = new Set()

    if (hasCycle({ root, graph, visitedNodes })) {
        return -1
    }
    if (visitedNodes.size != N) {
        return -1 // entire network was not visited
    }

    function maxTimeToTravel({ root, elapsedTime = 0 }) {
        let edges = graph.nodes.get(root.name).edges
        for (let [edge, time] of edges) {
            const edgeNode = graph.nodes.get(edge)
            const timeToEdge = elapsedTime + time
            maxTimeToTravel({
                root: edgeNode,
                elapsedTime: timeToEdge,
            })
        }
        return maximumTime = Math.max(maximumTime, elapsedTime)

    }

    maxTimeToTravel({ root })


    return maximumTime

}

function hasCycle({ root, graph, visitedNodes }) {
    visitedNodes.add(root.name)
    for (let edge of root.edges.keys()) {
        const edgeNode = graph.nodes.get(edge)
        if (
            visitedNodes.has(edgeNode.name) ||
            hasCycle({ root: edgeNode, graph, visitedNodes })
        )
            return true
    }
    return false
}



function buildGraph(nodeCount) {
    const graph = new Graph()
    while (nodeCount > 0) {
        graph.addNode(nodeCount)
        nodeCount -= 1
    }
    return graph
}

class Node {
    constructor(name) {
        this.name = name
        this.edges = new Map()
    }
    addEdge = (node, time) => {
        if (this.edges[node]) throw new Error(`Node already exists!`)
        this.edges.set(node, time)
    }
}

class Graph {
    nodes = new Map()
    addNode = name => {
        if (!this.nodes.has(name)) {
            const node = new Node(name)
            this.nodes.set(node.name, node)
        }
    }
}

networkDelayTime(
    [[1,2,1],[2,1,3]],
    2,
    2
)
