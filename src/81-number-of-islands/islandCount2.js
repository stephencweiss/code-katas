/**
 *
 * @param {Array<Array<'L'|'W'>>} map - an array of arrays. Each element indicates either land or water
 * @returns {number} - the number of distict islands - an island is a contiguous series of 'L' elements bordered by 'W' or the edge of the map
 */
export function countIslands(map) {
    // each plot can be identified by its x/y
    // the y is the row index
    // the x is the column index

    // we will need a way to track all of plots that we visit
    let visited = new Set() // the set can be comprised of a string reference ot the element, ex. "0-0" is the first element in the map; "1-3" is in the second row and 4th column
    let islandCount = 0
    const maxRow = map.length - 1
    if (!map[0]) return islandCount
    const maxColumn = map[0].length - 1
    function exploreIsland(row, column) {
        if (visited.has(`${row}-${column}`)) return
        visited.add(`${row}-${column}`)

        if (row - 1 >= 0 && map[row - 1][column] === 'L')
            exploreIsland(row - 1, column) // left
        if (row + 1 <= maxRow && map[row + 1][column] === 'L')
            exploreIsland(row + 1, column) // right
        if (column + 1 <= maxColumn && map[row ][column +1] === 'L')
            exploreIsland(row, column + 1) // up
        if (column - 1 >= 0 && map[row][column - 1] === 'L')
            exploreIsland(row, column - 1) // down
    }

    // we'll take the map and start traversing l->r, t->b;
    // if the plot is "W" we can move on
    // if it's "L",
    // we need to check to see if we've visited that plot before
    // if we haven't yet seen it, we need to drop in and explore
    // once the exploration has concluded increment the islandCount by 1

    for (let row = 0; row <= maxRow; row += 1) {
        for (let col = 0; col <= maxColumn; col += 1) {
            if (map[row][col] === 'L') {
                if (!visited.has(`${row}-${col}`)) islandCount += 1
                exploreIsland(row, col)
            }
        }
    }
    return islandCount
}

// map = [
//     ['W', 'L', 'W', 'W', 'L', 'W'],
//     ['L', 'L', 'W', 'L', 'L', 'L'],
//     ['W', 'L', 'W', 'W', 'W', 'L'],
//     ['W', 'W', 'W', 'W', 'W', 'W'],
//     ['W', 'L', 'W', 'L', 'L', 'W'],
//     ['W', 'W', 'W', 'L', 'W', 'W'],
// ]

// countIslands(map)
