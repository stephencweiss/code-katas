/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
    // initialize the graph
    const DEFAULT_DURATION = Number.MAX_SAFE_INTEGER
    if (checkForNegatives(times)) return - 1
    const nodeTable = initializeNodeTable({nodeCount: N, source: K, defaultDuration: DEFAULT_DURATION })

    function findDurations(node){
        const edges = times.filter(([source, ...rest]) => source = node.name)
        for ([source, destination, time] of edges){
            const startingDuration = getDuration(nodeTable, source)
            const currentDuration = getDuration(nodeTable, destination)
            const tentativeDuration = startingDuration + time
            if (tentativeDuration < currentDuration){
                setDuration(nodeTable, destination, tentativeDuration)
            }
        }
        markAsVisited(nodeTable, node)
    }

    // findDurations(startingPoint)
    let candidates = findCandidates(nodeTable)
    while(candidates.length){
        const startingPoint = findStartingPoint(candidates)
        findDurations(startingPoint)
        candidates = findCandidates(nodeTable)
    }


    return findMax(nodeTable, DEFAULT_DURATION)

}

function checkForNegatives(times){
    for (let [source, destination, duration] of times){
        if (duration < 0 ) return true
    }
    return false
}

function findMax(nodeTable, DEFAULT_DURATION){
    const maxDuration = nodeTable.reduce((acc, cur) => acc.duration > cur.duration ? acc : cur).duration
    return maxDuration == DEFAULT_DURATION ? -1 : maxDuration
}

function getNode(nodeTable, target){
    return nodeTable.find(node => node.name == target.name)
}

function markAsVisited(nodeTable, target){
    return getNode(nodeTable, target).visited = true
}

function setDuration(nodeTable, target, time){
    return nodeTable.find(node => node.name == target).duration = time
}

function getDuration(nodeTable, name){
     const node = nodeTable.find(node => node.name == name)
     return node.duration
}

function findCandidates(nodeTable){
    return nodeTable.filter(node => !node.visited)
}

function findStartingPoint(candidates){
    return candidates.reduce((acc, cur) => acc.duration < cur.duration ? acc: cur)
}


function initializeNodeTable({nodeCount, source, defaultDuration}){

    const nodeTable = []
    while (nodeCount){
        nodeTable.push({name: nodeCount, duration: defaultDuration, visited: false})
        nodeCount -= 1
    }

    nodeTable.find(node => node.name == source).duration = 0
    return nodeTable
}



networkDelayTime(
    [[2,1,1],[2,3,1],[3,4,1]],
    4,
    2
)