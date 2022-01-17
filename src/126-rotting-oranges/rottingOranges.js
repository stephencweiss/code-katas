/**
 * https://leetcode.com/problems/rotting-oranges/
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // starting point is a rotten orange

    // check 1 - no rotten oranges = -1
    // check 2 - 0 rotten oranges on an island = -1

    // check 3 - all oranges are rotten = return time elapsed

    // for each healthy orange
    // find the number of steps it takes to get to a rotten orange
    // if you can't reach a rotten orange, -1
    //

    // steps
    // build a queue of healthy oranges
    // for each healthy orange
    // count the steps to a rotten orange
    // keep the maximum number - start the max @ 0
    // if orange cannot reach a rotten orange, return negative one

    // opportunity to optimize by saying if you've already visited this cell, then you can skip -- though this would require storing somewhere how many steps for each cell, so another data structure, like a map, that would store the number of steps from there to a rotten orange

    let minMinutesToRot = 0
    const queue = buildHealthyQueue(grid)
    while (queue.length) {
        const { row, col } = queue.shift()
        const minToRot = visitOrange(grid, row, col)
        if (minToRot === -1) return -1
        minMinutesToRot = Math.max(minMinutesToRot, minToRot)
    }
    return minMinutesToRot
}

/**
 * @param {number[][]} grid
 * @return {row: number, col: number}[]
 */
function buildHealthyQueue(grid) {
    const maxRow = grid.length
    const maxCol = grid[0].length
    const queue = []
    for (let row = 0; row < maxRow; row++) {
        for (let col = 0; col < maxCol; col++) {
            // if healthy, add to queue
            if (grid[row][col] === 1) {
                queue.push({ row, col })
            }
        }
    }
    return queue
}

function visitOrange(grid, row, col) {
    const visited = new Set()
    let queue = [{ row, col, steps: 0 }]

    const dir = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
    ]
    const isOrange = neighborIsOrange(grid)

    while (queue.length) {
        const { row, col, steps } = queue.shift()
        if (visited.has(`${row}-${col}`)) continue

        // base case, rotten
        visited.add(`${row}-${col}`)
        if (grid[row][col] == 2) return steps

        // build up queue of neighbors
        dir.forEach(([rDiff, cDiff]) => {
            const [newR, newC] = [row + rDiff, col + cDiff]
            if (isOrange(newR, newC)) {
                queue.push({ row: newR, col: newC, steps: steps + 1 })
            }
        })
    }
    return -1
}

function neighborIsOrange(grid) {
    const maxRow = grid.length
    const maxCol = grid[0].length
    return (row, col) =>
        row >= 0 &&
        row < maxRow &&
        col >= 0 &&
        col < maxCol &&
        grid[row][col] > 0
}

const matrix = [
    [2, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
]
const matrix2 = [
    [2, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 1],
]
const matrix3 = [
    [2, 2],
    [0, 0],
]

console.log(orangesRotting(matrix))
console.log(orangesRotting(matrix2))
console.log(orangesRotting(matrix3))
