/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const rows = board.length
    const columns = board[0].length

    const nextState = Array.from(Array(rows), _ => Array(columns).fill(0))

    for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
            const livingNeighbors = findLivingNeighbors(board, row, column)
            nextState[row][column] = calculateNextState(
                board[row][column],
                livingNeighbors
            )
        }
    }

    for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
            board[row][column] = nextState[row][column]
        }
    }

    return nextState
}

function findLivingNeighbors(board, row, column) {
    let livingNeighbors = 0
    livingNeighbors += (board[row - 1] && board[row - 1][column - 1]) || 0 // top-left
    livingNeighbors += (board[row - 1] && board[row - 1][column]) || 0 // top-middle
    livingNeighbors += (board[row - 1] && board[row - 1][column + 1]) || 0 // top-right

    livingNeighbors += board[row][column - 1] || 0 // middle-left
    livingNeighbors += board[row][column + 1] || 0 // middle-right

    livingNeighbors += (board[row + 1] && board[row + 1][column - 1]) || 0 // bottom-left
    livingNeighbors += (board[row + 1] && board[row + 1][column]) || 0 // bottom-middle
    livingNeighbors += (board[row + 1] && board[row + 1][column + 1]) || 0 // bottom-right

    return livingNeighbors
}

function calculateNextState(currentState, livingNeighbors) {
    let nextState = currentState

    if (Boolean(currentState) && livingNeighbors < 2) {
        // Any live cell with fewer than two live neighbors dies as if caused by under-population.
        nextState = 0
    } else if (
        // Any live cell with two or three live neighbors lives on to the next generation.
        Boolean(currentState) &&
        (livingNeighbors === 2 || livingNeighbors === 3)
    ) {
        // console.log(`rule 2`)
        nextState = 1
    } else if (Boolean(currentState) && livingNeighbors > 3) {
        //  Any live cell with more than three live neighbors dies, as if by over-population.
        nextState = 0
    } else if (!Boolean(currentState) && livingNeighbors === 3) {
        //  Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
        nextState = 1
    }

    return nextState
}

const board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
]
console.log(gameOfLife(board))
