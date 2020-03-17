export function findMaxPath(board) {
    let globalMaxPath = Number.NEGATIVE_INFINITY
    for (let row = 0; row < board.length; row += 1) {
        for (let column = 0; column < board[0].length; column += 1) {
            const validPaths = findAllValidPaths(row, column, board)
            validPaths.sort()
            const largestValidPath = validPaths[validPaths.length - 1]
            if (largestValidPath > globalMaxPath)
                globalMaxPath = largestValidPath
        }
    }
    return globalMaxPath
}

function findAllValidPaths(row, column, board) {
    function findValidPaths(
        rowPosition,
        columnPosition,
        board,
        pathTracker = [],
        previousMove = 'NONE'
    ) {
        pathTracker.push(board[rowPosition][columnPosition])

        if (isValidPath(pathTracker)) {
            // use lexical scoping to reach outside and add path to validPaths
            return validPaths.push(Number(pathTracker.join('')))
        }

        // look left
        if (columnPosition - 1 >= 0 && isValidMove(previousMove, 'LEFT')) {
            findValidPaths(
                rowPosition,
                columnPosition - 1,
                board,
                [...pathTracker],
                'LEFT'
            )
        }
        // look right
        if (
            columnPosition + 1 < board[0].length &&
            isValidMove(previousMove, 'RIGHT')
        ) {
            findValidPaths(
                rowPosition,
                columnPosition + 1,
                board,
                [...pathTracker],
                'RIGHT'
            )
        }
        // look up
        if (rowPosition - 1 >= 0 && isValidMove(previousMove, 'UP')) {
            findValidPaths(
                rowPosition - 1,
                columnPosition,
                board,
                [...pathTracker],
                'UP'
            )
        }
        // look down
        if (
            rowPosition + 1 < board.length &&
            isValidMove(previousMove, 'DOWN')
        ) {
            findValidPaths(
                rowPosition + 1,
                columnPosition,
                board,
                [...pathTracker],
                'DOWN'
            )
        }
    }

    const validPaths = []
    findValidPaths(row, column, board)
    return validPaths
}

function isValidPath(path) {
    if (path && path.length === 4) return true
    return false
}

const oppositeMoves = {
    LEFT: 'RIGHT',
    RIGHT: 'LEFT',
    UP: 'DOWN',
    DOWN: 'UP',
}
/**
 * Determines if a move is valid based on the previous move; this works because we are limited to only four integers and as a result _cannot_ repeat unless we go back as diagonal values are not available.
 */
function isValidMove(previousMove, proposedMove) {
    return oppositeMoves[previousMove] !== proposedMove
}
