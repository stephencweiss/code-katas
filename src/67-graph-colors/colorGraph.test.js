const { colorGraph } = require('./colorGraph')

describe('color graphs!', () => {
    test('valid graph', () => {
        const a = new GraphNode('a')
        const b = new GraphNode('b')
        const c = new GraphNode('c')

        a.neighbors.add(b)
        b.neighbors.add(a)
        c.neighbors.add(b)
        b.neighbors.add(c)

        const graph = [a, b, c]

        const colors = ['red', 'yellow', 'blue']
        const coloredGraph = colorGraph(graph, colors)
        // expect every node to have a color
        expect(coloredGraph.filter(node => !node.color).length).toBe(0)

        // expect that for each node, the color is different than its neighbor's
        const neighborlyOverlap = coloredGraph.filter(node => {
            const neighbors = Array.from(node.neighbors)
            for (let i = 0; i < neighbors.length; i += 1) {
                const neighbor = neighbors[i]
                if (neighbor.color === node.color) {
                    return true
                }
            }
            return false
        })
        expect(neighborlyOverlap.length).toBe(0)
    })
    test('detects loops', () => {
        const a = new GraphNode('a')
        const b = new GraphNode('b')
        const c = new GraphNode('c')

        a.neighbors.add(b)
        b.neighbors.add(a)
        b.neighbors.add(b)
        c.neighbors.add(b)
        b.neighbors.add(c)

        const graph = [a, b, c]

        const colors = ['red', 'yellow', 'blue']
        function loopColoring() {
            return colorGraph(graph, colors)
        }
        expect(loopColoring).toThrow('Loop detected!')
    })
})

class GraphNode {
    constructor(label) {
        this.label = label
        this.neighbors = new Set()
        this.color = null
    }
}
