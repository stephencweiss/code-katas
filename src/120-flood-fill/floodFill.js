// https://leetcode.com/problems/flood-fill/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const visited = new Set(`${sr}-${sc}`)
    const matchColor = image[sr][sc]
    return traverse(image, sr, sc, newColor, matchColor, visited)
}

function traverse(image, sr, sc, newColor, matchColor, visited) {
    console.table(image)
    if (image[sr][sc] !== matchColor || visited.has(`${sr}-${sc}`)) return image
    visited.add(`${sr}-${sc}`)
    image[sr][sc] = newColor
    console.table(image)
    // up
    if (checkIndices(image, sr - 1, sc)) {
        traverse(image, sr - 1, sc, newColor, matchColor, visited)
    }
    // down
    if (checkIndices(image, sr + 1, sc)) {
        traverse(image, sr + 1, sc, newColor, matchColor, visited)
    }

    // left
    if (checkIndices(image, sr, sc - 1)) {
        traverse(image, sr, sc - 1, newColor, matchColor, visited)
    }
    // right
    if (checkIndices(image, sr, sc + 1)) {
        traverse(image, sr, sc + 1, newColor, matchColor, visited)
    }
    return image
}

function checkIndices(matrix, row, col) {
    const maxRow = matrix.length - 1
    const maxCol = matrix[0].length - 1
    return row >= 0 && col >= 0 && row <= maxRow && col <= maxCol
}

const img = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
]
console.log(floodFill(img, 1, 1, 2))

const img2 = [
    [0, 0, 0],
    [0, 1, 1],
]

console.log(floodFill(img2, 1, 1, 1))
