/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    const { result, queue } = createDistanceMatrix(matrix)
    const visited = new Set()
    const dir = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ]

    while (queue.length) {
        const { row, col, dist } = queue.shift() // shift is important to ensure bfs
        visited.add(`${row}-${col}`)

        dir.forEach(([rDiff, cDiff]) => {
            const [r, c] = [row + rDiff, col + cDiff]

            if (
                isValidPosition(r, c, matrix) &&
                !visited.has(`${r}-${c}`) &&
                matrix[r][c] !== 0
            ) {
                visited.add(`${r}-${c}`)
                result[r][c] = dist + 1
                const next = { row: r, col: c, dist: dist + 1 }
                queue.push(next)
            }
        })
    }
    return result
}

function isValidPosition(row, col, matrix) {
    return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length
}

function createDistanceMatrix(matrix) {
    const maxRows = matrix.length
    const maxCol = matrix[0].length
    const result = Array.from(Array(maxRows), _row =>
        Array(maxCol).fill(Infinity)
    )
    const queue = []

    for (let row = 0; row < maxRows; row += 1) {
        for (let col = 0; col < maxCol; col += 1) {
            if (matrix[row][col] == 0) {
                result[row][col] = 0
                queue.push({ row, col, dist: 0 })
            }
        }
    }

    return { result, queue }
}

// const matrix = [
//     [0, 0, 0],
//     [0, 1, 0],
//     [0, 0, 0],
// ]
// const result = [
//     [0, 0, 0],
//     [0, 1, 0],
//     [0, 0, 0],
// ]

const matrix0 = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
]

const matrixResult = [
    [4, 3, 2, 3, 4],
    [3, 2, 1, 2, 1],
    [2, 1, 0, 1, 2],
    [3, 2, 1, 2, 2],
    [4, 3, 2, 2, 1],
]
const matrix2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
const result2 = [
    [4, 3, 2, 3, 4, 1, 1, 1, 1, 1, 1],
    [3, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 0, 1, 2, 1, 1, 1, 0, 1, 1],
    [3, 2, 1, 2, 2, 1, 2, 1, 1, 1, 1],
    [4, 3, 2, 2, 1, 0, 1, 2, 1, 1, 1],
    [1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 2, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

updateMatrix(matrix0)
// updateMatrix(matrix2)

const assert = console.assert
