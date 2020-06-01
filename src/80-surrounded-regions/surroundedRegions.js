/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board.length) return
    const minRow = 0
    const minColumn = 0
    const maxRow = board.length - 1
    const maxColumn = board[0].length - 1
    const previouslyEvaluated = new Set()
    for (let row = 0; row <= maxRow; row += 1) {
        for (let column = 0; column <= maxColumn; column += 1) {
            if (
                board[row][column] == 'O' &&
                !previouslyEvaluated.has(`${row}${column}`)
            ) {
                // find all neighbors that are "O"
                // mark them all as seen
                // if any of them are on the border, escape
                // if none of them are on the border, infect them all

                const neighbors = findAllNeighbors({ row, column })
                if(!neighborsReachBorder(neighbors)){
                    neighbors.forEach(({row, column}) => board[row][column] = 'X')
                }
            }
        }
    }

    /**
     * If a cell does _not_ have a path to the border, infect all neighbors before returning
     * If a cell _does_ have a path to the border, track the whole path so we don't need to visit again
     * @returns {void}
     */
    function findAllNeighbors({ row, column }) {
        const stack = [] // since order doesn't matter, switching to stack for performance
        const visited = new Set()
        stack.push({ column, row })

        while (stack.length) {
            const { column: targetCol, row: targetRow } = stack.pop()
            visited.add({ column: targetCol, row: targetRow })
            previouslyEvaluated.add(`${targetRow}${targetCol}`)

            if (
                targetRow + 1 <= maxRow &&
                board[targetRow + 1][targetCol] == 'O' &&
                !previouslyEvaluated.has(`${targetRow + 1}${targetCol}`)
            )
                stack.push({ column: targetCol, row: targetRow + 1 })
            if (
                minRow <= targetRow - 1 &&
                board[targetRow - 1][targetCol] == 'O' &&
                !previouslyEvaluated.has(`${targetRow - 1}${targetCol}`)
            )
                stack.push({ column: targetCol, row: targetRow - 1 })
            if (
                minColumn <= targetCol - 1 &&
                board[targetRow][targetCol - 1] == 'O' &&
                !previouslyEvaluated.has(`${targetRow}${targetCol - 1}`)
            )
                stack.push({ column: targetCol - 1, row: targetRow })
            if (
                targetCol + 1 <= maxColumn &&
                board[targetRow][targetCol + 1] == 'O' &&
                !previouslyEvaluated.has(`${targetRow}${targetCol + 1}`)
            )
                stack.push({ column: targetCol + 1, row: targetRow })
        }
        // visited.forEach(({ row, column }) => (board[row][column] = 'X'))
        return visited
    }

    function neighborsReachBorder(neighbors) {
        for (neighbor in neighbors) {
            const { row, column } = neighbors[neighbor]
            if (onBorder(row, column)) {
                return true
            }
        }
        return false
    }

    function onBorder({ row, column }) {
        return !(
            minRow <= row - 1 &&
            row + 1 <= maxRow &&
            minColumn <= column - 1 &&
            column + 1 <= maxColumn
        )
    }

    return
}

let X = 'X'
let O = 'O'
let myBoard = (
    [['O', 'X', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'X', 'O', 'O', 'O', 'O', 'X'],
    ['O', 'X', 'O', 'X', 'O', 'O', 'O', 'O', 'X'],
    ['O', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O'],
    ['X', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'O', 'X', 'O', 'X', 'O', 'X'],
    ['O', 'O', 'O', 'X', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'X', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'X', 'X', 'O', 'O']])

let smallBoard = [
    [X, X, X, X],
    [X, O, O, X],
    [X, O, O, X],
    [X, X, X, X],
]

let expected = [
    [X, X, X, X, X, X, O],
    [X, X, X, X, O, O, O],
    [X, X, X, X, X, X, X],
    [X, X, X, X, X, X, X],
    [X, X, X, X, X, X, X],
    [X, O, X, X, X, X, X],
]

solve(myBoard)
// input



    //mine
//     (['O', 'X', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'X', 'X', 'X', 'X', 'X', 'X'],
//     ['O', 'X', 'O', 'X', 'X', 'X', 'X', 'X', 'X'],
//     ['O', 'O', 'O', 'O', 'X', 'X', 'X', 'O', 'O'],
//     ['X', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X'],
//     ['X', 'X', 'O', 'O', 'X', 'O', 'X', 'X', 'X'],
//     ['O', 'O', 'O', 'X', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'X', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'X', 'X', 'O', 'O'])
// ][
    // expected
    // (['O', 'X', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    // ['O', 'O', 'O', 'X', 'O', 'O', 'O', 'O', 'X'],
    // ['O', 'X', 'O', 'X', 'O', 'O', 'O', 'O', 'X'],
    // ['O', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O'],
    // ['X', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X'],
    // ['X', 'X', 'O', 'O', 'X', 'O', 'X', 'O', 'X'],
    // ['O', 'O', 'O', 'X', 'O', 'O', 'O', 'O', 'O'],
    // ['O', 'O', 'O', 'X', 'O', 'O', 'O', 'O', 'O'],
    // ['O', 'O', 'O', 'O', 'O', 'X', 'X', 'O', 'O'])

