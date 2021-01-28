// TODO: figure out how to do an _in place_ conversion

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const rows = board.length
    const columns = board[0].length

    for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
            const livingNeighbors = findLivingNeighbors(board, row, column)
            board[row][column] = encodeNextState(
                board[row][column],
                livingNeighbors
            )
        }
    }

    for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
            board[row][column] = decodeNextState(board[row][column])
        }
    }

    return board
}

function findLivingNeighbors(board, row, column) {
    let livingNeighbors = 0
    livingNeighbors +=
        board[row - 1] && board[row - 1][column - 1]
            ? board[row - 1][column - 1] % 2
            : 0 // top-left
    livingNeighbors += board[row - 1] ? board[row - 1][column] % 2 : 0 // top-middle
    livingNeighbors +=
        board[row - 1] && board[row - 1][column + 1]
            ? board[row - 1][column + 1] % 2
            : 0 // top-right

    livingNeighbors += board[row][column - 1] ? board[row][column - 1] % 2 : 0 // middle-left
    livingNeighbors += board[row][column + 1] ? board[row][column + 1] % 2 : 0 // middle-right

    livingNeighbors +=
        board[row + 1] && board[row + 1][column - 1]
            ? board[row + 1][column - 1] % 2
            : 0 // bottom-left
    livingNeighbors += board[row + 1] ? board[row + 1][column] % 2 : 0 // bottom-middle
    livingNeighbors +=
        board[row + 1] && board[row + 1][column + 1]
            ? board[row + 1][column + 1] % 2
            : 0 // bottom-right

    return livingNeighbors
}

/**
 * Today -> Future
 * Dead -> Dead 0*2^1+0*2^0 = 0
 * Alive -> Dead 0*2^1+1*2^0 = 1
 * Dead -> Alive 1*2^1+0*2^0 = 2
 * Alive -> Alive 1*2^1+1*2^0 = 3
 */
function encodeNextState(currentState, livingNeighbors) {
    if (Boolean(currentState) && livingNeighbors < 2) {
        // Any live cell with fewer than two live neighbors dies as if caused by under-population.
        return 1
    } else if (
        // Any live cell with two or three live neighbors lives on to the next generation.
        Boolean(currentState) &&
        (livingNeighbors === 2 || livingNeighbors === 3)
    ) {
        // console.log(`rule 2`)
        return 3
    } else if (Boolean(currentState) && livingNeighbors > 3) {
        //  Any live cell with more than three live neighbors dies, as if by over-population.
        return 1
    } else if (!Boolean(currentState) && livingNeighbors === 3) {
        //  Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
        return 2
    } else if (!Boolean(currentState)) {
        return 0
    } else if (Boolean(currentState)) {
        return 3
    }
    throw new Error('Should not get here')
}

function decodeNextState(currentState) {
    return currentState < 2 ? 0 : 1
}

const board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
]
console.log(gameOfLife(board))
module.exports = { gameOfLife }
