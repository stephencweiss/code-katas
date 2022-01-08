/**
 * https://leetcode.com/problems/max-area-of-island/
 * The key here is that it's easier to keep track of the island size with
 * breadth-first-search. So, instead of using recursion, I used a queue
 * and was able to explore islands more ergonomically as a result.
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let visited = new Set()
    let maxIslandSize = 0
    console.table(grid)
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            grid[row][col] == 1 && visitIsland(grid, row, col, visited)
        }
    }

    return maxIslandSize
    function visitIsland(grid, row, col, visited) {
        let islandSize = 0
        const queue = [[row, col]]
        while (queue.length) {
            // pop off queue and increment island size
            const [row, col] = queue.pop()
            const key = createKey(row, col)
            if (visited.has(key)) continue

            visited.add(key)
            islandSize += 1

            // if adjacent is land and unvisited - add to queue

            // up
            if (checkIndices(grid, row - 1, col) && grid[row - 1][col] == 1) {
                queue.push([row - 1, col])
            }
            // down
            if (checkIndices(grid, row + 1, col) && grid[row + 1][col] == 1) {
                queue.push([row + 1, col])
            }
            // right
            if (checkIndices(grid, row, col + 1) && grid[row][col + 1] == 1) {
                queue.push([row, col + 1])
            }

            // left
            if (checkIndices(grid, row, col - 1) && grid[row][col - 1] == 1) {
                queue.push([row, col - 1])
            }
        }
        maxIslandSize = Math.max(maxIslandSize, islandSize)
    }
}

function createKey(row, col) {
    return `${row}-${col}`
}

function checkIndices(matrix, row, col) {
    const maxRow = matrix.length - 1
    const maxCol = matrix[0].length - 1
    return row >= 0 && col >= 0 && row <= maxRow && col <= maxCol
}

const map = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]

console.log(maxAreaOfIsland(map))
