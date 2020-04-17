function colorGraph(graph, colors) {
    return graph.map(node => {
        while (!node.color) {
            for (let i = 0; i < colors.length; i += 1) {
                const currentColor = colors[i]
                if (node.neighbors.has(node)) {
                    throw new Error(`Loop detected!`)
                }
                const neighbors = Array.from(node.neighbors)
                const neighborAlreadyAssigned = neighbors.filter(
                    neighbor => neighbor.color === currentColor
                )
                if (neighborAlreadyAssigned.length === 0) {
                    node.color = currentColor
                    break
                }
            }
        }
        return node
    })
}

module.exports = { colorGraph }
