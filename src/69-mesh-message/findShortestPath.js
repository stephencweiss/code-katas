function findShortestPath(origin, destination, network) {
    // given an origin in a network
    // explore the routes to the destination
    // need to account for:
    // 1. a cycle (if a node has already been visited, escape)
    // 2. a terminus without arriving at the destination
    // 3. arriving at the destination - comparing to shortest route

    let shortestPath = []
    let shortestDistance = Number.POSITIVE_INFINITY
    function findPath(node, destination, network, currentPath, exploredNodes) {
        console.log(node)
        const edges = network[node] || []
        // for each edge of the origin node,
        edges.forEach(edge => {
            const path = [...currentPath, edge]
            // if the current path < the current shortest path
            if (path.length < shortestDistance) {
                if (edge === destination) {
                    shortestPath = path
                    shortestDistance = shortestPath.length
                    return
                }
                // avoid cycles
                if (exploredNodes.has(edge)) return
                else {
                    exploredNodes.add(edge)
                    findPath(
                        edge,
                        destination,
                        network,
                        path,
                        exploredNodes
                    )
                }
                // compare to shortest path, and save current path (with destination appended)
                // else call find path with the edge as the origin, the same destination, adding the origin node to the end of the current path, and adding it to explored nodes
                // return
            }
        })
    }
    findPath(origin, destination, network, [origin], new Set([origin]))
    return shortestPath
}

const network = {
    Min: ['William', 'Jayden', 'Omar'],
    William: ['Min', 'Noam'],
    Jayden: ['Min', 'Amelia', 'Ren', 'Noam'],
    Ren: ['Jayden', 'Omar'],
    Amelia: ['Jayden', 'Adam', 'Miguel'],
    Adam: ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    Miguel: ['Amelia', 'Adam', 'Liam', 'Nathan'],
    Noam: ['Nathan', 'Jayden', 'William'],
    Omar: ['Ren', 'Min', 'Scott'],
}

console.log(findShortestPath('Jayden', 'Adam', network))