/**
 * @param {character[][]} grid
 * @return {number}
 */

const WATER = 0
const LAND = 1
var numIslands = function(grid) {
    if (!grid.length) return 0
    const rows = grid.length
    const columns = grid[0].length
    let islandCount = 0
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ]

    function searchNeighbors(row, column) {
        const queue = []
        queue.push(new Cell(row, column))
        while (queue.length) {
            const cell = queue.shift()
            grid[cell.row][cell.column] = WATER
            directions.forEach(([dRow, dColumn]) => {
                const row = cell.row + dRow
                const column = cell.column + dColumn
                if (
                    0 <= row &&
                    row < rows &&
                    0 <= column &&
                    column < columns &&
                    grid[row][column] == LAND
                ) {
                    queue.push(new Cell(row, column))
                }
            })
        }
    }

    for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
            if (grid[row][column] == WATER) continue
            islandCount += 1
            searchNeighbors(row, column)
        }
    }

    return islandCount
}

class Cell {
    constructor(row, column) {
        this.row = row
        this.column = column
    }
}

const grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
]

numIslands(grid)
