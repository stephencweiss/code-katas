/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = buildGraph(numCourses, prerequisites)
    const courseSchedule = new Set()
    const coursesInProcess = new Set()
    const reviewedCourses = new Set()

    for (let [courseName, node] of graph.nodes) {
        if (
            !addClassToSchedule({
                courseName,
                graph,
                node,
                reviewedCourses,
                coursesInProcess,
                courseSchedule,
            })
        )
            return []
    }

    return [...courseSchedule]
}

class Node {
    constructor(name) {
        this.name = name
        this.edges = new Set()
    }
    addEdge = name => this.edges.add(name)
}

class Graph {
    nodes = new Map()
    addNode = node => {
        if (!this.nodes.has(node.name)) {
            this.nodes.set(node.name, node)
        }
    }
}

/**
 *
 * @returns {boolean} If the class is not added (because a cycle is detected), false, else true
 */
function addClassToSchedule({
    courseName,
    node,
    coursesInProcess,
    reviewedCourses,
    courseSchedule,
}) {
    coursesInProcess.add(courseName)

    const edges = node.edges
    if(edges.size){
        for(let edge of edges){
            let course = edge.name
            if (reviewedCourses.has(course)) continue
            if (coursesInProcess.has(course)) {
                return false
            }
            if (
                !addClassToSchedule({
                    courseName: course,
                    node: edge,
                    reviewedCourses,
                    coursesInProcess,
                    courseSchedule,
                })
            ) {
                return false
            }

        }
    }


    coursesInProcess.delete(courseName)
    reviewedCourses.add(courseName)
    courseSchedule.add(courseName)
    return true
}

function buildGraph(numCourses, prerequisites) {
    const graph = new Graph()
    let courseCount = 0
    // add nodes
    while (courseCount < numCourses) {
        const node = new Node(courseCount)
        graph.addNode(node)
        courseCount += 1
    }

    // add edges
    prerequisites.forEach(([node, edge]) => {
        let curNode = graph.nodes.get(node)
        let edgeNode = graph.nodes.get(edge)
        if (!curNode)
            throw new Error(
                `Unregistered class! ${node} is outside of range of classes`
            )
        if (!edgeNode)
            throw new Error(
                `Unregistered class dependency! ${edge} is outside of range of classes`
            )
        if (!curNode.edges.has(edge)) {
            curNode.addEdge(edgeNode)
        }
    })
    return graph
}

const numCourses = 4
const prerequisites = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 2],
    // [2, 0],
]

console.log(findOrder(numCourses, prerequisites))
